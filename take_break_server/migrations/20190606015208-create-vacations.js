'use strict';

const { DataTypes } = require('sequelize');
const { defaultMigrationColumns } = require('../config/migrationColumns');

const tableName = 'vacations';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      ...defaultMigrationColumns,
      memberId: {
        type: new DataTypes.INTEGER()
      },
      managedUserId: {
        type: new DataTypes.INTEGER()
      },
      startDate: {
        type: new DataTypes.DATE()
      },
      endDate: {
        type: new DataTypes.DATE()
      },
      type: {
        type: new DataTypes.INTEGER()
      },
      content: {
        type: new DataTypes.STRING()
      },
      status: {
        type: new DataTypes.INTEGER()
      },
      period: {
        type: new DataTypes.INTEGER()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
