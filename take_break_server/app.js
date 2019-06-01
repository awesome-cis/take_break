const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const passport = require('./passport');

const app = express();
const PORT = 8080;

const db = require('./database/db');
require('./models/user');

db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize
      .sync()
      .then(() => console.log('Database Synced!'))
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT + '!');
});
