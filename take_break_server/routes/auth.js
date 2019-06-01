const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('../passport');
const PasswordUtil = require('../lib/PasswordUtil');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    if (!user) {
      return res.status(401).send({
        code: 401001,
        message: info.message
      });
    }

    res.send({
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      accessToken: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    });
  })(req, res, next);
});

router.post('/register', async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).send({
      code: -1,
      message: 'failed'
    });
  }

  try {
    let user;
    user = await User.findOne({
      where: {
        email: email
      }
    });

    if (!user) {
      try {
        const hash = new PasswordUtil(password).encrypt();

        user = await User.create({
          name: name,
          email: email,
          password: hash
        });

        res.status(200).send({
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          },
          accessToken: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        });
      } catch (err) {
        throw Error('Password generation failed');
      }
    } else {
      res.status(400).send({
        code: 1,
        message: 'You are already registered.',
        uiMessage: 'User has been registered.'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send({
      code: 1,
      message: 'You are already registered.',
      uiMessage: 'User has been registered.'
    });
  }
});

module.exports = router;
