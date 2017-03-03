var express = require('express');
var router = express.Router();

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id, req.baseUrl);
  next();
}, function (req, res, next) {
  console.log('hola' + req.baseUrl);
  res.render('index.ejs', {user_id: req.params.id});
  //res.send('User ID ' + req.params.id);
});

module.exports = user;
