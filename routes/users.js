var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  console.log('usando middleware');
  next();
}, function (req, res, next) {
  console.log('hola' + req.hostname);
  res.render('users', {user_id: req.params.id});
});

module.exports = router;
