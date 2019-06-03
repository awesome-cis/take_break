const passport = require('passport');
const localStrategy = require('./localStrategy');

localStrategy(passport);

module.exports = passport;
