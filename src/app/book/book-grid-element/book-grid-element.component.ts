import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookGridElementComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

  decreaseRating() {
    this.book.rating --;
  }

  increaseRating() {
    this.book.rating ++;
  }

}
