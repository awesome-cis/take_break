import * as db from '../database/db';
import { Model, DataTypes } from 'sequelize';
import { defaultMigrationColumns } from '../config/migrationColumns';

class Invite extends Model {}

Invite.init(
  {
    ...defaultMigrationColumns,
    userId: { type: new DataTypes.INTEGER() },
    managedUserId: { type: new DataTypes.INTEGER() },
    organizationId: { type: new DataTypes.INTEGER() },
    status: { type: new DataTypes.INTEGER() }
  },
  {
    sequelize: db.sequelize,
    tableName: 'invites'
  }
);

export default Invite;
