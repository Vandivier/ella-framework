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

import { ClientModule } from './client/client.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ClientModule)
  .catch(err => console.log(err));
  