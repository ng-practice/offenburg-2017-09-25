import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from 'app/book/core/book.service';

@Component({
  selector: 'tr-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {
  books: Book[];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.all()
    .subscribe(books => {
      this.books = books;
      this.books.sort(
        (a: Book, b: Book) => b.rating - a.rating);
      });

  }

}
