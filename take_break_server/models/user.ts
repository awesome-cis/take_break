import * as db from '../database/db';
import * as bcrypt from 'bcrypt';
import { Model, DataTypes } from 'sequelize';
import { defaultMigrationColumns } from '../config/migrationColumns';
import * as jwt from 'jsonwebtoken';

class User extends Model {
  id?: number;
  password?: string;

  static register(
    name: string,
    email: string,
    password: string
  ): Promise<{
    id: number;
    name: string;
    email: string;
    password: string;
  }> {
    const hash = bcrypt.hashSync(password, 12);

    return User.create({
      name: name,
      email: email,
      password: hash
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
    name: {
      type: new DataTypes.STRING(),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING()
    },
    password: {
      type: new DataTypes.STRING()
    },
    provider: {
      type: new DataTypes.STRING()
    },
    oAuthId: {
      type: new DataTypes.STRING()
    }
  },
  {
    sequelize: db.sequelize,
    tableName: 'users'
  }
);

export default User;
