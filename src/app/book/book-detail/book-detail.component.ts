import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/book/models/book';

@Component({
  selector: 'tr-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {
  book = new Book('', 0, [], '');
  constructor(private ar: ActivatedRoute) {
    const isbn = this.ar.snapshot.params['isbn'];
   }

  ngOnInit() {
  }

}
