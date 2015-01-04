var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sesame-client-example-development',
    sessionSecret: 'sesame-client-example',
    sessionCollection: 'sessions'
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
