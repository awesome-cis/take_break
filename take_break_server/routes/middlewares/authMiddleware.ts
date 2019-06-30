import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { User } from '../../models';
import { HTTP_CODE } from '../../constants';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // read the token from header or url
  const token =
    req.headers['authorization'] ||
    req.headers['Authorization'] ||
    req.query.token;

  // token does not exist
  if (!token) {
    // TODO: use `next(APIError)`
    return res.status(HTTP_CODE.UNAUTHORIZED).json({
      code: -1,
      message: 'invalid token',
      uiMessage: 'invalid token'
    });
  }

  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (err: jwt.VerifyErrors, decoded: object | string) => {
        if (err) reject(err);
        resolve(decoded);
      }
    );
  });

  // process the promise
  p.then(async decoded => {
    const user = await User.findOne({
      where: {
        id: (decoded as any).id
      }
    });
    req.user = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    next();
  }).catch(error => {
    // TODO: use `next(APIError)`
    res.status(HTTP_CODE.UNAUTHORIZED).json({
      code: -1,
      message: error.message,
      uiMessage: 'invalid token'
    });
  });
};

export default authMiddleware;
