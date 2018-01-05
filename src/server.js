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

var app = express(); // TODO: const or let

app.use(express.static(path.join(__dirname, 'public')));

app.use('/logger', controllerLogger);

isoUtils.fInitState();

logger.logInfo('express server running on port 3200');

setupDatabase();

// TODO: to dedicated service
async function setupDatabase() {
    try {
        //await isoUtils.fpWait(); // just to allow debugger to catch process; DO NOT CHECK IN UNCOMMENTED
        //debugger
        logger.logInfo('connection:' + connection);
        logger.logInfo('connection.isConnected:' + connection.isConnected);
    } catch (e) {
        debugger
        logger.logError('initTypeOrm err', e);
    }
}

module.exports = app;
