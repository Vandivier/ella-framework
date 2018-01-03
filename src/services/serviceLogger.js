/**
 *  A general purpose logger. Reports to /var/log, assuming a Linux server
 *  TODO: if log file or folder(s) dont exist, make them
 *  TODO: parameter to pass from package.json so we con't create log file and folder, just report to command line
 */

const fs = require('fs');
const EOL = require('os').EOL;

const logger = {
  sLogPathError: '/var/log/ng-express-cms/ng-express-cms-error.log',
  sLogPathEverything: '/var/log/ng-express-cms/ng-express-cms-everything.log',
  sLogPathInfo: '/var/log/ng-express-cms/ng-express-cms-info.log',
  logInfo: function (sMessage, oException) {
    var logMsgToFile = EOL + EOL + 'INFO: ' + (new Date().toISOString()) + ' : ' + sMessage;

    console.log(logMsgToFile);
    fs.appendFile(this.sLogPathEverything, logMsgToFile, function (err) {
      if (err) {
        console.log(err);
      }
    });
    fs.appendFile(this.sLogPathInfo, logMsgToFile, function (err) {
      if (err) {
        console.log(err);
      }
    });
  },
  logError: function (sMessage, soException) {
    var logMsgToFile = EOL + EOL + 'ERROR: ' + (new Date().toISOString()) + ' : ' + sMessage
                     + EOL + soException;

    console.log(logMsgToFile);
    fs.appendFile(this.sLogPathEverything, logMsgToFile, function (err) {
      if (err) {
        console.log(err);
      }
    });
    fs.appendFile(this.sLogPathError, logMsgToFile, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
};

module.exports = logger;
