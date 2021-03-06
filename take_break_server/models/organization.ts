import * as db from '../database/db';

import { Model, DataTypes } from 'sequelize';
import { defaultMigrationColumns } from '../config/migrationColumns';
import { defaultMigrationOptions } from '../config/migrationOptions';

class Organization extends Model {
  static TYPE = {
    INDIVIDUAL: 100,
    COMPANY: 200
  };
}

Organization.init(
  {
    ...defaultMigrationColumns,
    name: { type: new DataTypes.STRING() },
    description: { type: new DataTypes.TEXT() },
    link: { type: new DataTypes.STRING() },
    type: { type: new DataTypes.INTEGER() },
    slug: { type: new DataTypes.STRING() },
    isSearchable: { type: DataTypes.BOOLEAN },
    isJoinable: { type: DataTypes.BOOLEAN }
  },
  {
    sequelize: db.sequelize,
    tableName: 'organizations',
    ...defaultMigrationOptions
  }
);

export default Organization;
