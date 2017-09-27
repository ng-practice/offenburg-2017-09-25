import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'tr-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookGridElementComponent implements OnInit {
  @Input() book: Book;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  decreaseRating() {
    this.book.rating --;
  }

  increaseRating() {
    this.book.rating ++;
  }

  routeToDetails(isbn: string) {
    this.router.navigate(['/book', isbn]);
  }

}
