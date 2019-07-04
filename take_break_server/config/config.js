require('../initEnv');

const fs = require('fs');

const commonConfig = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql'
};

module.exports = {
  development: {
    ...commonConfig
  },
  test: {
    ...commonConfig
  },
  production: {
    ...commonConfig,
    dialectOptions: {}
  }
};
