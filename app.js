// MY MAIN APP JS

var express = require('./config/express');

var app = express();
app.listen(7000);
module.exports = app;

console.log('My express server is running at localhsot:7000');
