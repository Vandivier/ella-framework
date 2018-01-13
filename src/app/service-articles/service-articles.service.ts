import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from '../domain/Item';
import { ItemType } from '../domain/ItemType';
import { Injectable } from '@angular/core';

@Injectable()

export class ServiceArticlesService {

    private _item1: Item = new Item('This is my first article!', 'lorem ipsum, etc, etc.', ItemType.Article);
    private _item2: Item = new Item('This is my second [:', 'scoobie doobie do. where r u.', ItemType.Article);

    //ref: https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable

    private bsarroArticles = new BehaviorSubject<Item[]>([this._item1, this._item2]);

    obsarrArticles = this.bsarroArticles.asObservable(); // asObservable() gets the last-broadcast value from the BS obj

    constructor() { }

    // it's like a pub/sub or broadcast pattern
    fBroadcastArticleUpdate(_oArticle) {
        this.bsarroArticles.next(_oArticle);
    }

    public get item1(): Item  {
		return this._item1;
    }
    
    public get item2(): Item  {
		return this._item2;
	}
}
