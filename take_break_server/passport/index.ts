import * as passport from 'passport';

import localStrategy from './localStrategy';

localStrategy(passport);

export default passport;
