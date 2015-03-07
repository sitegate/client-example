'use strict';

var request = require('request');
var User = require('mongoose').model('User');
var config = require('../../config/config');

exports.get = function (req, res, next) {
  if (!req.query.token) {
    return res.status(401);
  }
  request(config.sitegate.domain + '/api/user-info?token=' + req.query.token, function (err, response, body) {
    if (err) {
      return next(err);
    }

    var userInfo = JSON.parse(body);

    function login(user) {
      req.login(user, function (err) {
        if (err) {
          return res.status(400).send(err);
        }
        return res.redirect('/');
      });
    }

    User.findOne({
      username: userInfo.username
    }, function (err, user) {
      if (err || !user) {
        var user = new User(userInfo);

        user.save(function (err) {
          if (err) {
            return res.status(400).send(err);
          }
          return login(user);
        });
        return;
      }
      return login(user);
    });
  });
};