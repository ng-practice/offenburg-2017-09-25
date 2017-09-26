import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit {

  title = 'Ng-Worshop';
  isGridView: boolean;
  constructor() {

    this.isGridView = true;
   }

  ngOnInit() {

  }
  setViewMode(isGridView: boolean) {
    this.isGridView = isGridView;
  }

}
