import * as db from '../database/db';
import * as bcrypt from 'bcrypt';
import { Model, DataTypes } from 'sequelize';

class User extends Model {
  password: string = '';

  validatePassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
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
    sequelize: (db as any).sequelize
  }
);

export default {
  User: User
};
