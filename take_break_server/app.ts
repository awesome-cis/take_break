import './init';
import './models/user';

import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

import { sequelize } from './database/db';
import passport from './passport';
import indexRouter from './routes';
import usersRouter from './routes/users';

import authRouter from './routes/auth';
const cors = require('cors');
const app = express();
const PORT = 8080;

sequelize
  .authenticate()
  .then(() => {
    console.log('===== OK2 =====');

    // sequelize
    //   .sync({
    //     force: true
    //   })
    //   .then(() => console.log('Database Synced!'))
    //   .catch((err: any) => console.log(err));
  })
  .catch((err: any) => {
    console.log('===== ERR =====');
    console.log(err);
  });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT + '!');
  });
}

export default app;
