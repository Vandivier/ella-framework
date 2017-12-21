import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemCount: number = 4;
  sSubmitArticleButtonText: string = 'Publish'; // TODO: or Schedule or Update depending on WordPress-like conditions
  arrsArticleTitles: string[] = ['This is my first article!',
                                 'This is my second [:'];

  constructor() { }

  ngOnInit() {
  }

}
