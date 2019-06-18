import * as express from 'express';
import authMiddleware from './middlewares/authMiddleware';
import { Organization } from '../models';
import APIError from '../lib/errors/APIError';
import { HTTP_CODE } from '../constants';

const router = express.Router();

export const ERROR_CODE = {
  SLUG_ALREADY_USED: 422001,
  RESOURCE_NOT_EXISTS: 400001
};

router.post('/', authMiddleware, async (req, res, next) => {
  const {
    name,
    description,
    link,
    type,
    slug,
    isSearchable,
    isJoinable
  } = req.body;

  const slugCount: number = await Organization.count({
    where: {
      slug
    }
  });

  if (slugCount > 0) {
    return next(
      new APIError(
        HTTP_CODE.UNPROCESSABLE_ENTITY,
        ERROR_CODE.SLUG_ALREADY_USED,
        'provided slug is already used'
      )
    );
  }

  const organization = await Organization.create({
    name,
    description,
    link,
    type,
    slug,
    isSearchable,
    isJoinable
  });

  res.status(HTTP_CODE.CREATED).send(organization.toJSON());
});

router.delete('/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;

  const organization = await Organization.findOne({
    where: { id: Number(id) }
  });

  if (!organization) {
    return next(
      new APIError(
        HTTP_CODE.BAD_REQUEST,
        ERROR_CODE.RESOURCE_NOT_EXISTS,
        'resource already deleted or not exists'
      )
    );
  }

  await organization.destroy();
  return res.status(HTTP_CODE.NO_CONTENT).send();
});

export default router;
