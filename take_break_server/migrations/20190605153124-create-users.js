'use strict';

const { DataTypes } = require('sequelize');
const { defaultMigrationColumns } = require('../config/migrationColumns');

const tableName = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      ...defaultMigrationColumns,
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
      },
      nickname: {
        type: new DataTypes.STRING()
      },
      introduction: {
        type: new DataTypes.STRING()
      },
      profileImage: {
        type: new DataTypes.STRING()
      },
      slug: {
        type: new DataTypes.STRING()
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
