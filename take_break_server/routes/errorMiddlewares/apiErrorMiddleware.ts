import APIError from '../../lib/errors/APIError';
import * as express from 'express';

export default (
  err: Error,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  if (err instanceof APIError) {
    return res.status(err.status).send({
      code: err.code,
      message: err.message
    });
  }
};
