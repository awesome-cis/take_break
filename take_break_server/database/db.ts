import { Sequelize, Options } from 'sequelize';

const HOST = process.env.MYSQL_HOST;
const MY_SQL = 'mysql';
const SEQUELIZE_OPTIONS: Options = {
  host: HOST,
  dialect: MY_SQL
};

const newSequelize = (): Sequelize => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return new Sequelize(
        process.env.MYSQL_DATABASE!,
        process.env.MYSQL_USERNAME!,
        process.env.MYSQL_PASSWORD!,
        { ...SEQUELIZE_OPTIONS, logging: false }
      );
    case 'development':
      return new Sequelize(
        process.env.MYSQL_DATABASE!,
        process.env.MYSQL_USERNAME!,
        process.env.MYSQL_PASSWORD!,
        SEQUELIZE_OPTIONS
      );
    case 'production':
      return new Sequelize(
        process.env.MYSQL_DATABASE!,
        process.env.MYSQL_USERNAME!,
        process.env.MYSQL_PASSWORD!,
        SEQUELIZE_OPTIONS
      );
    default:
      return new Sequelize('', '', '', SEQUELIZE_OPTIONS);
  }
};

export const sequelize = newSequelize();
