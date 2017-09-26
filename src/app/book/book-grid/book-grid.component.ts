import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from 'app/book/core/book.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tr-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {
  books: Observable< Book[] >;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.books = this.bookService.allFromApi();
}
}
