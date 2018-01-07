import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const oUrlMap = {
  'users': 'http://localhost:3000/api/EllaUsers',
  'test': 'http://httpbin.org/get'
};

@Injectable()
export class ServiceUrlManagerService {

  constructor(private http: HttpClient) {
  }

  fGet(sUrlKey): any {
      return this.http.get(oUrlMap[sUrlKey]); // just testing
  }

}
