import * as express from 'express';
import authMiddleware from './middlewares/authMiddleware';
import { Organization } from '../models';

const router = express.Router();

router.post('/', authMiddleware, async (req, res, _next) => {
  const organization = await Organization.create({
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    type: req.body.type,
    isSearchable: req.body.isSearchable,
    isJoinable: req.body.isJoinable
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
