import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import { environment } from 'environments/environment';

@Injectable()
export class BookService {
  books: Observable < Book[] >;

  constructor(
    private http: HttpClient) {}

  addBook(book: Book) {
    //this.books.unshift(book);
    return this.http.post<{message: string, href: string}>
      (`${environment.backendUrl}/book`, book);
  }

  bookByIsbn(isbn: String) {
    return this.http.get< Book >
    (`${environment.backendUrl}/book/${isbn}`);
  }

  booksTimer() {
    return Observable.timer(200, 1000);
  }

  allFromApi(): Observable< Book[] > {
    return this.http.get< Book[] >
      (`${environment.backendUrl}/books`);
    /*  .map((booksResponse: any[]) => {
        return booksResponse
        .map(bookResponse => {
          return new Book(
            bookResponse.title,
            0,
            bookResponse.authors,
          bookResponse.isbn);
        });
      });
      */
    }


}
