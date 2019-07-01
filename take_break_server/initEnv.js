const dotenv = require('dotenv');
const path = require('path');

let filename = '';

switch (process.env.NODE_ENV) {
  case 'production':
    filename = '.env';
    break;
  case 'test':
    filename = '.env.local.test';
    break;
  case 'development':
  default:
    filename = '.env.local.development';
    break;
}

if (process.env.NODE_ENV != 'production') {
  dotenv.config({
    path: path.join(`./.env.local`)
  });
}

dotenv.config({
  path: path.join(`./${filename}`)
});
