import * as db from '../database/db';
import * as bcrypt from 'bcrypt';
import { Model, DataTypes } from 'sequelize';
import { defaultMigrationColumns } from '../config/migrationColumns';

class User extends Model {
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

// TODO: User.create 처럼 사용할 수 있게
export default User;
