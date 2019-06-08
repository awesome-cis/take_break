'use strict';
import * as db from '../database/db';

import { Model, DataTypes } from 'sequelize';
import { defaultMigrationColumns } from '../config/migrationColumns';

class Organization extends Model {}

Organization.init(
  {
    ...defaultMigrationColumns,
    name: { type: new DataTypes.STRING() },
    description: { type: new DataTypes.TEXT() },
    link: { type: new DataTypes.STRING() },
    type: { type: new DataTypes.INTEGER() },
    isSearchable: { type: DataTypes.BOOLEAN },
    isJoinable: { type: DataTypes.BOOLEAN }
  },
  {
    sequelize: db.sequelize,
    tableName: 'organizations'
  }
);

export default {
  Organization
};
