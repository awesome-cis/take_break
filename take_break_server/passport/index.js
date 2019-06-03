const passport = require('passport');
const localStrategy = require('./localStrategy');
const githubStrategy = require('./githubStrategy');

localStrategy(passport);
githubStrategy(passport);

module.exports = passport;
