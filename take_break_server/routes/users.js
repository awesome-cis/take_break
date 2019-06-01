const express = require('express');
const router = express.Router();
const authMiddleware = require('./middlewares/authMiddleware');

const mockedUser = {
  id: 1,
  email: 'letsget23@gmail.com',
  name: 'Gwanduk Kim'
};

/* GET users listing. */
router.get('/:id', authMiddleware, (req, res, next) => {
  res.send({
    user: req.user
  });
});

router.put('/:id', authMiddleware, (req, res, next) => {
  res.send({
    user: req.user
  });
});

module.exports = router;
