import * as express from 'express';

var router = express.Router();

router.get('/', function(_req, res, _next) {
  res.send({
    ok: true
  });
});

export default router;
