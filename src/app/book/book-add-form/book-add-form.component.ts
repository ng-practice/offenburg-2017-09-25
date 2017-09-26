import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent implements OnInit {
  book: Book;
  @Output() create = new EventEmitter< Book >();
  constructor() {
    this.book = new Book('', 0, [], '');
   }

  ngOnInit() {
  }

  addBook(addForm: NgForm) {
    this.create.emit( { ...{}, ...this.book});
    addForm.reset();
  }

}
