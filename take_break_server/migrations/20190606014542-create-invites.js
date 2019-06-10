'use strict';

const { DataTypes } = require('sequelize');
const { defaultMigrationColumns } = require('../config/migrationColumns');

const tableName = 'invites';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      ...defaultMigrationColumns,
      userId: {
        type: new DataTypes.INTEGER()
      },
      managedUserId: {
        type: new DataTypes.INTEGER()
      },
      organizationId: {
        type: new DataTypes.INTEGER()
      },
      status: {
        type: new DataTypes.INTEGER()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
