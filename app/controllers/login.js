var request = require('request'),
  User = require('mongoose').model('User');

exports.get = function (req, res, next) {
  if (!req.query.token) {
    return res.status(401);
  }
  request('http://localhost:3000/api/user-info?token=' + req.query.token, function (err, response, body) {
    if (err) return next(err);
    var user = new User(JSON.parse(body));

    user.save(function(err){
      if (err) {
        return res.status(400).send(err);
      } else {
        req.login(user, function(err) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.redirect('/');
          }
        });
      }
    });
  });
};