import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  arroArticles: any[] = [{ // TODO: Article, not any
      'sContent': 'lorem ipsum, etc, etc.',
      'sTitle': 'This is my first article!'
  }, {
      'sContent': 'scoobie doobie do. where r u.',
      'sTitle': 'This is my second [:'
  }];
  oNewArticle: any = {}; // TODO: Article, not any
  sSubmitArticleButtonText: string = 'Publish'; // TODO: or Schedule or Update depending on WordPress-like conditions

  constructor() { }

  fAddArticle() {
      if (this.oNewArticle.sTitle
          && this.oNewArticle.sContent)
      {
          this.arroArticles.push(this.oNewArticle);
      }
  }

  ngOnInit() {
  }

}
