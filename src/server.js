/**
 *  Title:
 *      server.js
 *
 *  Description
 *      This file is the entry point for the API server
 *      Standard file for Express server initialization
 *
 *  TODO: forever
 **/

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const isoUtils = require('./services/serviceIsomorphicUtilities');
const logger = require('./services/serviceLogger');

const controllerLogger = require('./controllers/controllerLogger');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/logger', controllerLogger);

isoUtils.fInitState();

logger.logInfo('express server running on port 3200');

// ref: https://www.w3schools.com/nodejs/nodejs_mysql.asp
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = app;
