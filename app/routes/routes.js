'use strict';

var home = require('../controllers/home'),
	login = require('../controllers/login');

module.exports = function (app) {
	app.route('/')
		.get(home.get);

	app.route('/login')
		.get(login.get);
};