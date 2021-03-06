import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import superagent from 'superagent';

import { User } from '../models';
import passport from '../passport';
import { HTTP_CODE } from '../constants';

const router = express.Router();

export const ERROR_CODE = {
  USER_NOT_EXIST: 401001,
  CODE_IS_REQUIRED: 400001
};

router.post('/login', (req, res, next) => {
  passport.authenticate(
    'local',
    { session: false },
    (err: any, user: any, info: any) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      if (!user) {
        return res.status(HTTP_CODE.UNAUTHORIZED).send({
          code: ERROR_CODE.USER_NOT_EXIST,
          message: info.message
        });
      }

      res.send({
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        accessToken: jwt.sign({ id: user.id }, process.env.JWT_SECRET as string)
      });
    }
  )(req, res, next);
});

router.post('/github', (req, res, _next) => {
  const code = req.body.code;

  if (!code) {
    return res.status(HTTP_CODE.BAD_REQUEST).send({
      code: ERROR_CODE.CODE_IS_REQUIRED,
      message: 'Invalid code'
    });
  }

  try {
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
      .end((_err, oAuthRes) => {
        const accessToken = oAuthRes.body.access_token;
        // 2. 발급된 access_token 이용하여 사용자 정보 fetch
        superagent
          .get('https://api.github.com/user')
          .set('Authorization', `token ${accessToken}`)
          .end(async (_err, userRes) => {
            // 3. 회원가입 또는 로그인 로직 진행 후, 클라이언트 응답
            const body = userRes.body;
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
              // 해당하는 사용자 없는 경우, 회원가입 수행
              user = await User.create({
                name: name,
                email: email,
                password: null,
                oAuthId: id,
                provider: 'github'
              });
            }

            // 응답
            res.send({
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              },
              accessToken: jwt.sign({ id: user.id }, process.env
                .JWT_SECRET as string)
            });
          });
      });
  } catch (err) {
    console.error(err);
  }
});

router.post('/register', async (req, res, _next) => {
  const { username, email, password, slug, bio } = req.body;

  if (!email || !username || !password || !slug) {
    return res.status(HTTP_CODE.BAD_REQUEST).send({
      // TODO: Define error code.
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
        const user = await User.register(username, email, password, slug, bio);

        res.status(HTTP_CODE.OK).send({
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            slug: user.slug,
            bio: user.bio
          },
          accessToken: jwt.sign({ id: user.id }, process.env
            .JWT_SECRET as string)
        });
      } catch (err) {
        console.error(err);
        // TODO: use `next(err)`
        throw Error('Password generation failed');
      }
    } else {
      res.status(HTTP_CODE.BAD_REQUEST).send({
        // TODO: Define error code.
        code: 1,
        message: 'You are already registered.',
        uiMessage: 'User has been registered.'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(HTTP_CODE.BAD_REQUEST).send({
      // TODO: Define error code.
      code: 1,
      message: 'You are already registered.',
      uiMessage: 'User has been registered.'
    });
  }
});

export default router;
