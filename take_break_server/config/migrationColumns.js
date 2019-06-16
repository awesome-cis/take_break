const { DataTypes } = require('sequelize');

const idColumn = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: new DataTypes.INTEGER()
  }
};

const autoDeletedColumn = {
  deletedAt: {
    allowNull: true,
    type: new DataTypes.DATE()
  }
};

const autoDateColumn = {
  createdAt: {
    allowNull: false,
    type: new DataTypes.DATE()
  },
  updatedAt: {
    allowNull: false,
    type: new DataTypes.DATE()
  }
};

exports.defaultMigrationColumns = {
  ...idColumn,
  ...autoDateColumn,
  ...autoDeletedColumn
};
