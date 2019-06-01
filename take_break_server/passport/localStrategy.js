const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = passport => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ where: { email: email } });

          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }

          if (!user.validatePassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
