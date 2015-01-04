var express = require('express'),
  router = express.Router(),
  config = require('../../config/config');

exports.get = function (req, res, next) {
  res.render('index', {
    title: 'Generator-Express MVC',
    user: req.user,
    sitegateDomain: config.sitegate.domain
  });
};
