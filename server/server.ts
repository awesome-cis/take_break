import * as Express from 'express';
import * as next from 'next';

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const app: next.Server = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server: Express.Application = Express();

  // POST /register
  server.post('/register', (_req, res) => {
    res.json({
      user: {
        id: 1,
        name: 'Mock User',
        nickname: 'Mocked Nickname',
        email: 'mock@test.com',
        slug: 'mocking'
      }
    });
  });

  // POST /login
  server.post('/login', (_req, res) => {
    res.json({
      user: {
        id: 1,
        name: 'Mock User',
        nickname: 'Mocked Nickname',
        email: 'mock@test.com',
        slug: 'mocking'
      }
    });
  });

  // GET /users/:id
  server.get('/users/:id', (_req, res) => {
    res.json({
      user: {
        id: 1,
        name: 'Mock User',
        nickname: 'Mocked Nickname',
        email: 'mock@test.com',
        slug: 'mocking'
      }
    });
  });

  // PUT /users/:id
  server.put('/users/:id', (_req, res) => {
    res.json({
      user: {
        id: 1,
        name: 'Mock User',
        nickname: 'Mocked Nickname',
        email: 'mock@test.com',
        slug: 'mocking'
      }
    });
  });

  // GET /summary
  server.get('/summary', (_req, res) => {
    res.json({
      remain: 9999
    });
  });

  // ...rest
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err: Express.Errback) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
