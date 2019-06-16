import * as express from 'express';
import authMiddleware from './middlewares/authMiddleware';

const router = express.Router();

/* GET users listing. */
router.get('/:id', authMiddleware, (req, res, _next) => {
  res.send({
    user: req.user
  });
});

router.put('/:id', authMiddleware, (req, res, _next) => {
  res.send({
    user: req.user
  });
});

export default router;
