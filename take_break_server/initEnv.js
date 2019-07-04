const dotenv = require('dotenv');

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

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: `./config/.env.local`
  });
}

dotenv.config({
  path: `./config/${filename}`
});
