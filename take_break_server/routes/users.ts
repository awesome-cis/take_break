import * as express from 'express';

const router = express.Router();
const authMiddleware = require('./middlewares/authMiddleware');

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
