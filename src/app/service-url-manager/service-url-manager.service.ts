// ref: https://blog.angularindepth.com/the-new-angular-httpclient-api-9e5c85fe3361

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const EllaUtils = require('ella-utils');

import oUrlMap from 'assets/url-map';

@Injectable()
export class ServiceUrlManagerService {

  constructor(private http: HttpClient) {}

  // fGet can return value, promise, response object, or RX observable.
  // returns value by default.
  // TODO: oRequestOptions.sCredentials
  // TODO: oRequestOptions.bBustUrlFromCache
  // TODO: oRequestOptions.params
  // TODO: generic error catch which logs error, as long as vUrlKey !== 'log-error' (that would loop forever)
  fGet(vUrlKey, oOptions): any {
    const oRequestOptions = oOptions && oOptions.oRequestOptions || {};
    let oHttpConfig = { // ref: https://angular.io/api/common/http/HttpClient#members
        body: null as any,
        headers: null as any,
        observe: (oRequestOptions.bAsRawResponse ? 'response' : null) as any,
        params: (oRequestOptions.params || null) as any,
        reportProgress: null as boolean,
        responseType: (oRequestOptions.responseType || 'json') as any,
        withCredentials: null as boolean
    };
    let obsRequest;
    let vUrl;

    if (window.location.href.slice(-9) === 'mock=true') {
        vUrl = _fMock();
    } else {
        vUrl = oUrlMap[vUrlKey] ? oUrlMap[vUrlKey] : vUrlKey;
    }

    if (!vUrl) {
        return undefined;
    }
    else if (typeof vUrl === 'string') {
        vUrl = EllaUtils.fsSupplant(vUrl, oOptions);
    }
    else if (vUrl instanceof Object) { // it's a function not a url string
        return vUrl(oOptions, EllaUtils.State);
    }

    if (oRequestOptions.sCredentials) {
        oHttpConfig.headers = {};
        oHttpConfig.headers.authorization = 'Basic ' + oRequestOptions.sCredentials.replace(/["\\]/g, '');
        oHttpConfig.withCredentials = true;
    }

    try {
        obsRequest = this.http.get(vUrl, oHttpConfig);
        return oRequestOptions.bAsPromise ? obsRequest.toPromise() : obsRequest;
    } catch (e) {
        /* TODO: pseudocode:
        if () {
            fGget('log-error', {
                'sErrorMessage': 'Get exception',
                'soException': e.message
            });
        }
        */
        /* TODO: pseudocode: different for Promise vs Value vs observable, etc? idk...
        .then(function (response) {
            resolve(response.data);
        }, function (reason) {
            var oError = {
                error: 'NA'
            };

            if (reason.data) {
                $.extend(oError, reason, oError);
            }

            resolve(oError);
        })
        */
    }

    function _fMock() {
        return 'mock/' + vUrlKey + '.json';
    }
  }

}
