/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
require('dotenv').config({
  silent: true
});
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const api = require('./controllers/api');

/* Configure app to use bodyParser()
 * this will let us get the data from a POST
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.set('superSecret', process.env.SECRET);
// REGISTER OUR ROUTES -------------------------------

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});

app.use('/', express.static(path.join(__dirname, 'views')));
app.route('/problems/')
  .post(api.postData);

// CONFIGURE & START THE SERVER
// =============================================================================
const port = process.env.PORT || 8080;
app.listen(port,
  () => console.log('Node.js listening on port ' + port)
);

module.exports = app;
