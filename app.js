'use strict';

var config = require('./config/config');
var glob = require('glob');
var mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
  if (err) {
    console.error('\x1b[31m', 'Could not connect to MongoDB!');
    console.log(err);
  }
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function(model) {
  require(model);
});

var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

app.listen(config.port);
