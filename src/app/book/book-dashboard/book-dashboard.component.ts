import { Component, OnInit } from '@angular/core';
import { Book } from 'app/book/models/book';
import { BookService } from 'app/book/core/book.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit {

  title = 'Ng-Worshop';
  isGridView: boolean;
  books: Book[] ;
  constructor(private bookService: BookService) {

    this.isGridView = true;
   }

  ngOnInit() {
    this.bookService.allFromApi()
    .subscribe(books => {
      this.books = books;
      this.createTimer();
    });

  }

  setViewMode(isGridView: boolean) {
    this.isGridView = isGridView;
  }

  addBook(book: Book) {
    console.log('create');

  this.bookService
  .addBook( book)
  .switchMap(message => this.bookService.allFromApi())
  .subscribe(books => {
    this.books = books;
  });
}

  createTimer() {
    const obs = this.bookService.booksTimer()
    .switchMap(next => {
      if(next>10){
        obs.unsubscribe();
      }
      return Observable.of(new Book(`Book #${next}`, next * 10, [], `${next}`)

    )})
    .subscribe(next => {

      console.log('test');

      this.books.unshift(next);
    });
  }
}
