const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: email
      }
    });

    if (!user) {
      throw Error('User not exists');
    }

    await bcrypt.compare(password, user.password, (err, ok) => {
      if (!ok) {
        res.status(400).send({
          code: -1,
          message: 'Cannot find your information',
          uiMessage: 'Cannot find your information'
        });
      } else {
        res.send({
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          },
          accessToken: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        });
      }
    });
  } catch (err) {
    res.status(400).send({
      code: -1,
      message: err,
      uiMessage: err
    });
  }
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
      bcrypt.hash(password, 12, async (err, hash) => {
        if (err) {
          throw Error('Password generation failed');
        }

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
      });
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
