
import { BookGridElementComponent } from './book-grid-element.component';
import { Book } from 'app/book/models/book';
import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BookGridElementComponent', () => {

  describe('Unit Test', () => {

    describe('When a book is rated down', () => {

      it('the rating is decreased by 1', () => {
        const gridElement = new BookGridElementComponent(null);
        gridElement.book = new Book('', 0, [], '');
        gridElement.decreaseRating();

        expect(gridElement.book.rating).toEqual(-1);
      });
    });
  });
  describe('Shallow Test', () => {
    describe('When a book is rated up', () => {
      let fixture: ComponentFixture<BookGridElementComponent>;
      let component: BookGridElementComponent;
      let rateUpBtn, ratingLbl;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [
            BookGridElementComponent
          ],
          imports: [RouterTestingModule],
          schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(BookGridElementComponent);
        component = fixture.componentInstance;

        component.book = new Book('', 0, [], '');
        fixture.detectChanges();

        rateUpBtn = fixture.debugElement
          .query(By.css('[name=book-rate-up-btn]'));

        ratingLbl = fixture.debugElement
          .query(By.css('.rating'));
      });

      it('the rating is increased by one', () => {

        rateUpBtn.nativeElement.click();

        fixture.detectChanges();

        expect(component.book.rating).toEqual(1);
        expect(ratingLbl.nativeElement.innerHTML).toEqual('Rating: 1');
      });

      it('the rating remains 5', () => {

        for (let index = 0; index < 6; index++) {
          rateUpBtn.nativeElement.click();
        }

        fixture.detectChanges();

        expect(component.book.rating).toEqual(5);
        expect(ratingLbl.nativeElement.innerHTML).toEqual('Rating: 5');
      });

    });

  });
});
