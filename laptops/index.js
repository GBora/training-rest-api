var express = require("express");

var laptopModule = express.Router();

laptopModule.get('/', function(req, res) {
  res.send('Hello from laptops');
});

laptopModule.get('/users', function(req, res) {
  res.send('List of APIv1 users.');
});

module.exports = laptopModule;