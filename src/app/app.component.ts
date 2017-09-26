import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { Book } from './book/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Worshop seed';
  books: Book[];
  isGridView: boolean;
  constructor() {
    this.books = [
      new Book('Angular', 30, ['Misko Hevery'], '123456789'),
      new Book('Aurelia', 30, ['Rob Eisenberg'], '1234567986'),
      new Book('VueJS', 20, ['Evan You'], '123456000'),
    ];
    this.isGridView = true;
   }

  ngOnInit() {

  }
  setViewMode(isGridView: boolean) {
    this.isGridView = isGridView;
  }

  addBook(book: Book) {
    this.books.unshift(book);
  }
}
