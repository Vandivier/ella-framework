/**
 *  Title:
 *      server.js
 *
 *  Description
 *      This file is the server-side entry point for the Angular Universal application
 *      Standard file for Angular Universal application using Angular CLI
 **/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './client/app.module';
import { environment } from './environments/environment';

// TODO: why import typeorm rather than require() it in the Express init?
import {createConnection, Connection} from 'typeorm'; // ref: http://typeorm.io/#/using-ormconfig/creating-a-new-connection-from-the-configuration-file

import {logger} from './services/serviceLogger.js'; // not working

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

initTypeOrm();

// tons of warnings is a known thing. see: https://github.com/typeorm/typeorm/pull/1143
// TODO: bc logger isn't working, directly write to file so we can see
async function initTypeOrm() {
    const connection: Connection = await createConnection();
    logger.logInfo('connection:' + connection);
    logger.logInfo('connection.isConnected:' + connection.isConnected);
}
