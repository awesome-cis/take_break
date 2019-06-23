import * as db from '../database/db';
import { defaultMigrationColumns } from '../config/migrationColumns';

import { Model, DataTypes } from 'sequelize';
import { defaultMigrationOptions } from '../config/migrationOptions';

class Vacation extends Model {}

Vacation.init(
  {
    ...defaultMigrationColumns,
    memberId: new DataTypes.INTEGER(),
    managedUserId: new DataTypes.INTEGER(),
    startDate: new DataTypes.DATE(),
    endDate: new DataTypes.DATE(),
    type: new DataTypes.INTEGER(),
    content: new DataTypes.STRING(),
    status: new DataTypes.INTEGER(),
    period: new DataTypes.INTEGER()
  },
  {
    sequelize: db.sequelize,
    tableName: 'vacations',
    ...defaultMigrationOptions
  }
);

export default Vacation;
