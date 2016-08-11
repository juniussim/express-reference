module.exports = function(app) {
  var index = require('../controllers/staticpage.controller');
  app.get('/', index.render);
 };
