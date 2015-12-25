'use strict';

var home = require('../controllers/home');
var signout = require('../controllers/signout');
var auth = require('../controllers/auth');
var passport = require('passport');

module.exports = function(app) {
  app.route('/')
    .get(home.get);

  app.route('/signout')
    .get(signout.get);

  app.route('/auth/sitegate')
    .get(passport.authenticate('sitegate'));

  app.route('/auth/sitegate/callback')
    .get(auth.oauthCallback('sitegate'));
};
