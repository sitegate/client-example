var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'sitegate-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sitegate-client-example-development',
    sessionSecret: 'sitegate-client-example',
    sessionCollection: 'sessions',
    sitegate: {
      domain: 'https://account.sitegatedev.com:3000',
      clientId: 'K2fqgHNhGFGKBQtE7V7o',
      clientSecret: 'AgmkWLx5tv2QfzUEYAvdAvdsrcG70oK7xl2vmCUS',
      callbackURL: 'http://sitegatedev.com:3001/auth/sitegate/callback'
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'sitegate-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sitegate-client-example-test',
    sessionSecret: 'sitegate-client-example',
    sessionCollection: 'sessions'
  },

  production: {
    root: rootPath,
    app: {
      name: 'sitegate-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sitegate-client-example-production',
    sessionSecret: 'sitegate-client-example',
    sessionCollection: 'sessions'
  }
};

module.exports = config[env];