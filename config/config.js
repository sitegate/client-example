var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sitegate-client-example-development',
    sessionSecret: 'sesame-client-example',
    sessionCollection: 'sessions',
    sitegate: {
      domain: 'http://account.sitegatedev.com:3000',
      clientId: 'K2fqgHNhGFGKBQtE7V7o',
      clientSecret: 'AgmkWLx5tv2QfzUEYAvdAvdsrcG70oK7xl2vmCUS',
      callbackURL: 'http://sitegatedev.com:3001/auth/sitegate/callback'
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sitegate-client-example-test',
    sessionSecret: 'sesame-client-example',
    sessionCollection: 'sessions'
  },

  production: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sitegate-client-example-production',
    sessionSecret: 'sesame-client-example',
    sessionCollection: 'sessions'
  }
};

module.exports = config[env];