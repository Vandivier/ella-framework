/**
 *  file name: service-base-service.ts
 *  aliases: B, Base Service
 *
 *  description:
 *      wraps a number of commonly used services into one injectable base service.
 **/

import { Injectable } from '@angular/core';

import { ServiceUrlManagerService } from '../service-url-manager/service-url-manager.service';

const EllaUtils = require('ella-utils');

@Injectable()
export class ServiceBaseService {

  State;
  UrlManager;
  Utils;

  constructor(_UrlManager: ServiceUrlManagerService) {
      this.State = EllaUtils.State; // bc we hella lazy
      this.UrlManager = _UrlManager;
      this.Utils = EllaUtils;
  }

}
