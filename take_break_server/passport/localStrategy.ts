import { PassportStatic } from 'passport';
import * as passportLocal from 'passport-local';

import User from '../models/user';

const LocalStrategy = passportLocal.Strategy;

export default (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email: string, password: string, done: any) => {
        try {
          const user = await User.User.findOne({ where: { email: email } });

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
