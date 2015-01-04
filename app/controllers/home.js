var express = require('express'),
  router = express.Router();

exports.get = function (req, res, next) {
  res.render('index', {
    title: 'Generator-Express MVC',
    user: req.user
  });
};
