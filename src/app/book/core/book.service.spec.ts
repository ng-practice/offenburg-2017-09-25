import { BookService } from 'app/book/core/book.service';
import {
  HttpTestingController
  } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from 'app/book/models/book';

describe('Bookservice', () => {
  describe('When allFromApi is called', () => {
    let bookService: BookService;
    let testController: HttpTestingController;

    beforeEach(() => {
      // vgl. @ngModule
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [BookService],
        schemas: [NO_ERRORS_SCHEMA]
      });
      bookService = TestBed.get(BookService);
      testController = TestBed.get(HttpTestingController);
    });

    it('should GET an Array of books', () => {
      const response = [
        new Book('', 0, [], ''),
        new Book('', 0, [], ''),
        new Book('', 0, [], ''),
      ];

      bookService.allFromApi().subscribe(books => {
        expect(books.length).toEqual(3);
        //expect(books).toEqual(response);
      });

      const request = testController
      .expectOne('http://localhost:4280/books');

      request.flush(response);

      testController.verify();

    });

  });
});
