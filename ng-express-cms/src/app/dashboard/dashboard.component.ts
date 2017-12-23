import { Component, OnInit } from '@angular/core';

import { ServiceArticlesService } from '../service-articles/service-articles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  oNewArticle: any = {}; // TODO: Article, not any
  sSubmitArticleButtonText: string = 'Publish'; // TODO: or Schedule or Update depending on WordPress-like conditions
  arroArticles = [];

  constructor(private ServiceArticles: ServiceArticlesService) { }

  fAddArticle() {
      if (this.oNewArticle.sTitle
          && this.oNewArticle.sContent)
      {
          this.arroArticles.push(this.oNewArticle);
          this.ServiceArticles.fBroadcastArticleUpdate(this.arroArticles);
      }
  }

  // TODO: remove via key not index
  fRemoveArticle(i) {
      this.arroArticles.splice(i, 1);
      this.ServiceArticles.fBroadcastArticleUpdate(this.arroArticles);
  }

  ngOnInit() {
      this.ServiceArticles.obsarrArticles.subscribe(res => this.arroArticles = res);
      this.ServiceArticles.fBroadcastArticleUpdate(this.arroArticles);
  }

}
