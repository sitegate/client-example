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
    db: 'mongodb://localhost/sesame-client-example-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sesame-client-example-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'sesame-client-example'
    },
    port: 3001,
    db: 'mongodb://localhost/sesame-client-example-production'
    
  }
};

module.exports = config[env];
