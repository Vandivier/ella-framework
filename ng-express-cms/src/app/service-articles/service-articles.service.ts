import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class ServiceArticlesService {

  private bsarroArticles = new BehaviorSubject<any>([{ // TODO: Article Type, not any. ref: https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
      'sContent': 'lorem ipsum, etc, etc.',
      'sTitle': 'This is my first article!'
  }, {
      'sContent': 'scoobie doobie do. where r u.',
      'sTitle': 'This is my second [:'
  }]);

  obsarrArticles = this.bsarroArticles.asObservable(); // asObservable() gets the last-broadcast value from the BS obj

  constructor() { }

  // it's like a pub/sub or broadcast pattern
  fBroadcastArticleUpdate(_oArticle) {
      this.bsarroArticles.next(_oArticle);
  }
}
