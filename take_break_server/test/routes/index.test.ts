import app from '../../app';
import { agent } from 'supertest';

describe('GET /', () => {
  it('returns ok attribute as true', () => {
    expect(true).toBe(true);
  });

  it('respond to 200 OK', async () => {
    const res = await agent(app)
      .get('/')
      .set('Accept', 'application/json');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      ok: true
    });
  });
});
