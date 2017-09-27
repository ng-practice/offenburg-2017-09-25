import {BookService} from '../core/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/book/models/book';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'tr-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {
  book = new Book('', 0, [], '');
  constructor(
    private ar: ActivatedRoute,
    private bookService: BookService
  ) {
    const isbn = this.ar.snapshot.params['isbn'];

    this.bookService.bookByIsbn(isbn)
    .subscribe(book => this.book = book);
  }

  ngOnInit() {
  }

}
