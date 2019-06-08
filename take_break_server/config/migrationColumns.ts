import { DataTypes } from 'sequelize';

const idColumnObj = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: new DataTypes.INTEGER()
  }
};

const isDeletedColumnObj = {
  isDeleted: {
    type: DataTypes.BOOLEAN
  }
};

const autoDateColumnObj = {
  createdAt: {
    allowNull: false,
    type: new DataTypes.DATE()
  },
  updatedAt: {
    allowNull: false,
    type: new DataTypes.DATE()
  }
};

export const defaultMigrationColumns = {
  ...idColumnObj,
  ...isDeletedColumnObj,
  ...autoDateColumnObj
};
