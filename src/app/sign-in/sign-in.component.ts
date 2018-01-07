import { Component, OnInit } from '@angular/core';

import { ServiceBaseService } from '../service-base/service-base.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private B: ServiceBaseService) {
      console.log(B.UrlManager.fGet('test'));
  }

  ngOnInit() {
  }

}
