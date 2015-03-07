'use strict';

var home = require('../controllers/home');
var login = require('../controllers/login');
var signout = require('../controllers/signout');

module.exports = function (app) {
  app.route('/')
    .get(home.get);

  app.route('/login')
    .get(login.get);

  app.route('/signout')
    .get(signout.get);
};