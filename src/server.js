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
const compass = require('compass');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');

const isoUtils = require('./services/serviceIsomorphicUtilities');
const logger = require('./services/serviceLogger');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/logger', controllerLogger);

isoUtils.fInitState();

module.exports = app;
