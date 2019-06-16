import * as express from 'express';
import authMiddleware from './middlewares/authMiddleware';
import { Organization } from '../models';

const router = express.Router();

router.post('/', authMiddleware, async (req, res, _next) => {
  const { name, description, link, type, isSearchable, isJoinable } = req.body;
  const organization = await Organization.create({
    name,
    description,
    link,
    type,
    isSearchable,
    isJoinable
  });

  res.status(201).send(organization.toJSON());
});

router.delete('/:id', authMiddleware, async (req, res, _next) => {
  const id = req.params.id;

  try {
    const organization = await Organization.findOne({
      where: { id: Number(id) }
    });

    try {
      await organization.update({
        isDeleted: true
      });
    } catch (err) {
      // TODO: error handling;
    }
  } catch (err) {
    // TODO: error handling.
  }

  res.status(204).send();
});

export default router;
