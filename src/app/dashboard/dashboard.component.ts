import { Component, OnInit } from '@angular/core';
import { ServiceArticlesService } from '../service-articles/service-articles.service';
import { Item } from '../domain/Item';
import { ItemType } from '../domain/ItemType';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    oNewArticle: Item;
    sSubmitArticleButtonText: string = 'Publish'; // TODO: or Schedule or Update depending on WordPress-like conditions
    arroArticles = [];

    constructor(private ServiceArticles: ServiceArticlesService) {
        this.oNewArticle = new Item('','',ItemType.Article);
    }

    fAddArticle() {
        let newArticle = this.oNewArticle;
        if (newArticle.title && newArticle.content) {
            this.arroArticles.push(new Item(newArticle.title, newArticle.content, ItemType.Article));
            this.ServiceArticles.fBroadcastArticleUpdate(this.arroArticles);
        }
    }

    fRemoveArticle(item) {
        this.arroArticles = this.arroArticles.filter(_item => _item !== item);
        this.ServiceArticles.fBroadcastArticleUpdate(this.arroArticles);
    }

    fToggleArticleContent(item) {
        item.isContentVisible = !item.isContentVisible;
    }

    ngOnInit() {
        this.ServiceArticles.obsarrArticles.subscribe(res => this.arroArticles = res);
        this.ServiceArticles.fBroadcastArticleUpdate(this.arroArticles);
    }

}

