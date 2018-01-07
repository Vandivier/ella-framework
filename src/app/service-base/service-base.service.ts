/**
 *  file name: service-base-service.ts
 *  aliases: B, Base Service
 *
 *  description:
 *      wraps a number of commonly used services into one injectable base service.
 **/

import { Injectable } from '@angular/core';

import { ServiceUrlManagerService } from '../service-url-manager/service-url-manager.service';

const _utils = require('ella-utils');

@Injectable()
export class ServiceBaseService {

  UrlManager;

  constructor(_UrlManager: ServiceUrlManagerService) {
      this.UrlManager = _UrlManager;
  }

}
