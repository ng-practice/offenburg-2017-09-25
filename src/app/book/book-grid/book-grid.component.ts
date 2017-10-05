import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from 'app/book/core/book.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'tr-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent {
  @Input() books: Book;

}



