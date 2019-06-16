const { DataTypes } = require('sequelize');

const idColumn = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: new DataTypes.INTEGER()
  }
};

const isDeletedColumn = {
  isDeleted: {
    type: DataTypes.BOOLEAN
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
  ...isDeletedColumn,
  ...autoDateColumn
};
