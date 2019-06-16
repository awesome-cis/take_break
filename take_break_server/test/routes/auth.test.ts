import app from '../../app';
import { agent } from 'supertest';
import prepareDatabase from '../../prepareDatabase';
import { User } from '../../models';

const NAME = 'Test User';
const EMAIL = 'user@test.com';
const PASSWORD = 'test1234';

// TODO: Write failing case.
// TODO: Extract common logic. from `it` context.
beforeEach(done => {
  prepareDatabase().then(() => {
    done();
  });
});

afterEach(() => {
  // TODO: Clear database data.
  //   - For now, this is ok.
  //   - Because setup logic drops table. So, it works.
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

    // Status code
    expect(res.status).toBe(200);

    // Response body
    const accessToken = res.body.accessToken;
    expect(typeof accessToken).toBe('string');
    expect(accessToken.length).not.toBe(0);

    const resUser = res.body.user;
    expect(typeof resUser.id).toBe('number');
    expect(resUser.email).toBe(EMAIL);
    expect(resUser.name).toBe(NAME);

    // Database
    const allUsersCount = await User.count();
    expect(allUsersCount).toBe(1);

    done();
  });
});

describe('POST /auth/login', () => {
  beforeEach(done => {
    User.register(NAME, EMAIL, PASSWORD).then(() => {
      done();
    });
  });

  it('expect to response correctly', async done => {
    const res = await agent(app)
      .post('/auth/login')
      .send({
        email: EMAIL,
        password: PASSWORD
      })
      .set('Accept', 'application/json');

    // Status code
    expect(res.status).toBe(200);

    // Response body
    const accessToken = res.body.accessToken;
    expect(typeof accessToken).toBe('string');
    expect(accessToken.length).not.toBe(0);

    const resUser = res.body.user;
    expect(typeof resUser.id).toBe('number');
    expect(resUser.email).toBe(EMAIL);
    expect(resUser.name).toBe(NAME);

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
