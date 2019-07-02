const dotenv = require('dotenv');
const path = require('path');

let filename = '';

switch (process.env.NODE_ENV) {
  case 'production':
    filename = '.env.production';
    break;
  case 'test':
    filename = '.env.test';
    break;
  case 'development':
  default:
    filename = '.env.development';
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
