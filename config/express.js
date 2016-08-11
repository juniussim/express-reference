// INITIALIZER FOR MY EXPRESS APPLICATION

var express = require('express');

module.exports = function() {
  var app = express();
  require('../app/routes/routes')(app);
  return app;
};
