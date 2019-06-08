import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test'
    ? 'take_break_test'
    : (process.env.DEV_MYSQL_DATABASE as string),
  process.env.DEV_MYSQL_USERNAME as string,
  process.env.DEV_MYSQL_PASSWORD as string,
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
