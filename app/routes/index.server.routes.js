module.exports = function(app) {
  // MIDDLEWARE FOR ROUTING
  var index = require('../controllers/index.server.controller');
  var about = require('../controllers/about.server.controller');
  var contact = require('../controllers/contact.server.controller');

  // ACTUAL ROUTING
  app.get('/', index.render);
  app.get('/about', about.render);
  app.get('/contact', contact.render);
 };
