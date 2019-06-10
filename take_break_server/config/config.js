const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.DEV_MYSQL_USERNAME,
    password: process.env.DEV_MYSQL_PASSWORD,
    database: process.env.DEV_MYSQL_DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.TEST_MYSQL_USERNAME,
    password: process.env.TEST_MYSQL_PASSWORD,
    database: process.env.TEST_MYSQL_DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.PROD_MYSQL_USERNAME,
    password: process.env.PROD_MYSQL_PASSWORD,
    database: process.env.PROD_MYSQL_DATABASE,
    host: process.env.PROD_MYSQL_HOST,
    dialect: 'mysql',
    dialectOptions: {}
  }
};
