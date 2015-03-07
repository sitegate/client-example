'use strict';

var express = require('express');
var router = express.Router();
var config = require('../../config/config');

exports.get = function (req, res, next) {
  res.render('index', {
    title: 'This is an Example of a SiteGate Client',
    user: req.user,
    sitegateDomain: config.sitegate.domain
  });
};