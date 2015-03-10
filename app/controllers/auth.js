'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

exports.oauthCallback = function (strategy) {
  return function (req, res, next) {
    passport.authenticate(strategy, function (err, user, redirectURL) {
      if (req.user) {
        return res.redirect('/');
      }
      if (err || !user) {
        return res.redirect('/');
      }
      
      req.login(user, function (err) {
        if (err) {
          return res.redirect('/');
        }

        return res.redirect('/');
      });
    })(req, res, next);
  };
};