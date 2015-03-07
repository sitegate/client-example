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
    db: 'mongodb://localhost/sesame-client-example-development',
    sessionSecret: 'sesame-client-example',
    sessionCollection: 'sessions',
    sitegate: {
      domain: 'http://account.sitegatedev.com:3000'
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sesame-client-example-test',
    sessionSecret: 'sesame-client-example',
    sessionCollection: 'sessions'
  },

  production: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sesame-client-example-production',
    sessionSecret: 'sesame-client-example',
    sessionCollection: 'sessions'
  }
};

module.exports = config[env];