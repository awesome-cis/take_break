import * as db from '../database/db';
import { defaultMigrationColumns } from '../config/migrationColumns';
import { defaultMigrationOptions } from '../config/migrationOptions';

import { Model, DataTypes } from 'sequelize';

class VacationCount extends Model {}

VacationCount.init(
  {
    ...defaultMigrationColumns,
    memberId: new DataTypes.INTEGER(),
    managedUserId: new DataTypes.INTEGER(),
    description: new DataTypes.TEXT(),
    amount: new DataTypes.INTEGER()
  },
  {
    sequelize: db.sequelize,
    tableName: 'vacationCounts',
    ...defaultMigrationOptions
  }
);

export default VacationCount;
