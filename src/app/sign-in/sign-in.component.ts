// ref: http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial

import { Component, OnInit } from '@angular/core';

import { ServiceBaseService } from '../service-base/service-base.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  oLoginData = {
    'username': null as string,
    'password': null as string,
  };

  constructor(private B: ServiceBaseService) { }

  ngOnInit() {
    this.B.UrlManager.fGet('test')
        .subscribe(data => {
            console.log(data); // TODO: unit test
        });

    this.B.UrlManager.fGet('test', {
        oRequestOptions: {
            'bAsRawResponse': true
        }
    })
    .subscribe(data => {
        console.log(data); // TODO: unit test
    });

    console.log(this.B.State); // TODO: unit test
    console.log(this.B.Utils); // TODO: unit test
  }

  fLogin() {
    console.log(this.oLoginData);
  }

}
