const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('../passport');
const PasswordUtil = require('../lib/PasswordUtil');
const superagent = require('superagent');

router.post('/github', (req, res, next) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send({
      code: 400001,
      message: 'Invalid code'
    });
  }

  // 1. GitHub로 부터 access_token 발급
  superagent
    .post('https://github.com/login/oauth/access_token')
    .send({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .end((err, oAuthRes) => {
      const accessToken = oAuthRes.body.access_token;
      // 2. 발급된 access_token 이용하여 사용자 정보 fetch
      superagent
        .get('https://api.github.com/user')
        .set('Authorization', `token ${accessToken}`)
        .end(async (err, userRes) => {
          // 3. 회원가입 또는 로그인 로직 진행 후, 클라이언트 응답
          const body = userRes.body;
          const login = body.login;
          const id = body.id;
          const email = body.email;
          const name = body.name;

          let user = await User.findOne({
            where: {
              provider: 'github',
              oAuthId: id
            }
          });

          if (!user) {
            // 회원가입 수행
            user = await User.create({
              name: name,
              email: email,
              password: null,
              oAuthId: id,
              provider: 'github'
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
        });
    });
});

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