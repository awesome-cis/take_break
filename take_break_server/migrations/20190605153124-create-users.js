'use strict';

const { DataTypes } = require('sequelize');
const { defaultMigrationColumns } = require('../config/migrationColumns');

const tableName = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      ...defaultMigrationColumns,
      username: {
        type: new DataTypes.STRING()
      },
      email: {
        type: new DataTypes.STRING(),
        allowNull: false
      },
      password: {
        type: new DataTypes.STRING(),
        allowNull: false
      },
      provider: {
        type: new DataTypes.STRING()
      },
      oAuthId: {
        type: new DataTypes.STRING()
      },
      bio: {
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
