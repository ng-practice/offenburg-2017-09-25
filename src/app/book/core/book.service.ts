import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  books: Book[] = [
    new Book('Angular', 30, ['Misko Hevery'], '123456789'),
    new Book('Aurelia', 30, ['Rob Eisenberg'], '1234567986'),
    new Book('VueJS', 20, ['Evan You'], '123456000'),
  ];

  addBook(book: Book) {
    this.books.unshift(book);
  }

  all(): Observable< Book[]> {
    return Observable
    .of(this.books)
    .map(books => {
     return books.filter(book => {
        return book.price > 20;
      }
    );
  })
    .delay(2000);
  }
}
