import './init';

import * as Express from 'express';
import * as next from 'next';

import { OrganizationPageParams } from '../pages/organizations';

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const app: next.Server = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server: Express.Application = Express();

    server.get('/organizations/:action', (req, res) => {
      const actualPage = '/organizations';
      const queryParams: OrganizationPageParams = { action: req.params.action };

      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req: Express.Request, res: Express.Response) => {
      return handle(req, res);
    });

    server.listen(port, (err: Express.Errback) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(() => {
    app.close();
  });
