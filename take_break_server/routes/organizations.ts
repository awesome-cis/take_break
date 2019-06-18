import * as express from 'express';
import authMiddleware from './middlewares/authMiddleware';
import { Organization } from '../models';
import APIError from '../lib/errors/APIError';

const router = express.Router();

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
    return next(new APIError(422, 422001, 'provided slug is already used'));
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

  res.status(201).send(organization.toJSON());
});

router.delete('/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;

  const organization = await Organization.findOne({
    where: { id: Number(id) }
  });

  if (!organization) {
    return next(
      new APIError(400, 400001, 'resource already deleted or not exists')
    );
  }

  await organization.destroy();
  return res.status(204).send();
});

export default router;
