'use strict';

const { DataTypes } = require('sequelize');
const { defaultMigrationColumns } = require('../config/migrationColumns');

const tableName = 'vacationCounts';

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
      description: {
        type: new DataTypes.TEXT()
      },
      amount: {
        type: new DataTypes.INTEGER()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
