import { PassportStatic } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import User from '../models/user';

export default (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email: string, password: string, done: any) => {
        try {
          const user = await User.findOne({ where: { email } });

          if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
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
