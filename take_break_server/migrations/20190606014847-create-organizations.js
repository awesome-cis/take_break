'use strict';

const { DataTypes } = require('sequelize');
const { defaultMigrationColumns } = require('../config/migrationColumns');

const tableName = 'organizations';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      ...defaultMigrationColumns,
      name: {
        type: new DataTypes.STRING()
      },
      description: {
        type: new DataTypes.TEXT()
      },
      link: {
        type: new DataTypes.STRING()
      },
      type: {
        type: new DataTypes.INTEGER()
      },
      isSearchable: {
        type: Sequelize.BOOLEAN
      },
      isJoinable: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
