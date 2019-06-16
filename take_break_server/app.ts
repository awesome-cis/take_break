import './init';
import './models/user';

import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

import passport from './passport';
import indexRouter from './routes';
import usersRouter from './routes/users';
import organizationsRouter from './routes/organizations';

import authRouter from './routes/auth';
import prepareDatabase from './prepareDatabase';

import './models';

const cors = require('cors');
const app = express();
const PORT = 8080;

if (process.env.NODE_ENV !== 'test') {
  prepareDatabase();
}

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
app.use('/organizations', organizationsRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT + '!');
  });
}

export default app;
