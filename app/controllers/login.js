var request = require('request'),
  User = require('mongoose').model('User');

exports.get = function (req, res, next) {
  if (!req.query.token) {
    return res.status(401);
  }
  request('http://account.sitegatedev.com:3000/api/user-info?token=' + req.query.token, function (err, response, body) {
    if (err) return next(err);

    var userInfo = JSON.parse(body);

    function login(user) {
      req.login(user, function(err) {
        if (err) {
          res.status(400).send(err);
        } else {
          res.redirect('/');
        }
      });
    }

    User.findOne({
      username: userInfo.username
    }, function(err, user) {
      if (err || !user) {
        var user = new User(userInfo);

        user.save(function(err){
          if (err) {
            return res.status(400).send(err);
          } else {
            return login(user);
          }
        });
      } else {
        return login(user);
      }
    });
  });
};