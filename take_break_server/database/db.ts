import { Sequelize, Options } from 'sequelize';

const HOST = 'localhost';
const MY_SQL = 'mysql';
const SEQUELIZE_OPTIONS: Options = {
  host: HOST,
  dialect: MY_SQL
};

const newSequelize = (): Sequelize => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return new Sequelize(
        process.env.TEST_MYSQL_USERNAME!,
        process.env.TEST_MYSQL_PASSWORD!,
        process.env.TEST_MYSQL_DATABASE!,
        SEQUELIZE_OPTIONS
      );
    case 'development':
      return new Sequelize(
        process.env.DEV_MYSQL_USERNAME!,
        process.env.DEV_MYSQL_PASSWORD!,
        process.env.DEV_MYSQL_DATABASE!,
        SEQUELIZE_OPTIONS
      );
    case 'production':
      return new Sequelize(
        process.env.PROD_MYSQL_USERNAME!,
        process.env.PROD_MYSQL_PASSWORD!,
        process.env.PROD_MYSQL_DATABASE!,
        SEQUELIZE_OPTIONS
      );
    default:
      return new Sequelize('', '', '', {
        host: 'localhost',
        dialect: 'mysql'
      });
  }
};

export const sequelize = newSequelize();
