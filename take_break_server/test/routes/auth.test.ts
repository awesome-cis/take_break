import app from '../../app';
import { agent, Response } from 'supertest';
import prepareDatabase from '../../prepareDatabase';
import { User } from '../../models';
import { HTTP_CODE } from '../../constants';

const NAME = 'Test User';
const EMAIL = 'user@test.com';
const PASSWORD = 'test1234';

const checkAuthResponseBody = (res: Response) => {
  const accessToken = res.body.accessToken;
  expect(typeof accessToken).toBe('string');
  expect(accessToken.length).not.toBe(0);

  const resUser = res.body.user;
  expect(typeof resUser.id).toBe('number');
  expect(resUser.email).toBe(EMAIL);
  expect(resUser.name).toBe(NAME);
};

// TODO: Write failing case.
beforeEach(async done => {
  await prepareDatabase();
  done();
});

describe('POST /auth/register', () => {
  it('expect to response correctly', async done => {
    const res = await agent(app)
      .post('/auth/register')
      .send({
        name: NAME,
        email: EMAIL,
        password: PASSWORD
      })
      .set('Accept', 'application/json');

    // Response
    expect(res.status).toBe(HTTP_CODE.OK);
    checkAuthResponseBody(res);

    // Database
    const allUsersCount = await User.count();
    expect(allUsersCount).toBe(1);

    done();
  });
});

describe('POST /auth/login', () => {
  beforeEach(async done => {
    await User.register(NAME, EMAIL, PASSWORD);
    done();
  });

  it('expect to response correctly', async done => {
    const res = await agent(app)
      .post('/auth/login')
      .send({
        email: EMAIL,
        password: PASSWORD
      })
      .set('Accept', 'application/json');

    // Response
    expect(res.status).toBe(HTTP_CODE.OK);
    checkAuthResponseBody(res);

    // Database
    const allUsersCount = await User.count();
    expect(allUsersCount).toBe(1);

    done();
  });
});

describe('POST /auth/github', () => {
  pending('expect to response correctly');
  // const GITHUB_AUTH_CODE = 'SOME_CODE';
  // const res = await agent(app)
  //   .post('/auth/github')
  //   .send({
  //     code: GITHUB_AUTH_CODE
  //   })
  //   .set('Accept', 'application/json');
});
