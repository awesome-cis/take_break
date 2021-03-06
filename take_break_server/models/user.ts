import * as db from '../database/db';
import * as bcrypt from 'bcrypt';
import { Model, DataTypes } from 'sequelize';
import { defaultMigrationColumns } from '../config/migrationColumns';
import * as jwt from 'jsonwebtoken';
import { defaultMigrationOptions } from '../config/migrationOptions';

class User extends Model {
  id?: number;
  password?: string;

  static register(
    username: string,
    email: string,
    password: string,
    slug: string,
    bio: string
  ): Promise<{
    id: number;
    username: string;
    email: string;
    password: string;
    slug: string;
    bio: string;
  }> {
    const hash = bcrypt.hashSync(password, 12);

    return User.create({
      username,
      email,
      password: hash,
      slug,
      bio
    });
  }

  validatePassword(password: string) {
    return bcrypt.compareSync(password, this.password!);
  }

  generateJWT = (): string => {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET as string);
  };
}

User.init(
  {
    ...defaultMigrationColumns,
    username: {
      type: new DataTypes.STRING()
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(),
      allowNull: false
    },
    provider: {
      type: new DataTypes.STRING()
    },
    oAuthId: {
      type: new DataTypes.STRING()
    },
    slug: {
      type: new DataTypes.STRING()
    },
    bio: {
      type: new DataTypes.STRING()
    }
  },
  {
    sequelize: db.sequelize,
    tableName: 'users',
    ...defaultMigrationOptions
  }
);

export default User;
