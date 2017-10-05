import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';
import { NgForm } from '@angular/forms';
import { BookService } from 'app/book/core/book.service';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent implements OnInit {
  book: Book;
  @Output() bookCreated = new EventEmitter< Book >();
  constructor(
    private bookService: BookService
  ) {
    this.book = new Book('', 0, [], '');
   }

  ngOnInit() {
  }

  addBook(addForm: NgForm) {
    this.bookCreated.emit(this.book);
    addForm.reset();
  }

}
