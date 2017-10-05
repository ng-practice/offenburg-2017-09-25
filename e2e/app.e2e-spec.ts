import { BookGridElementComponentPage } from './book-grid-element.po';

describe('bookGridElementComponent', () => {
  let page: BookGridElementComponentPage;

  beforeAll(() => {
    page = new BookGridElementComponentPage();
  });
describe('when a bookGridElement is created', () => {
  it('should have a rating of 0', () => {
    page.navigateTo();
    expect(page.getRatingOfFirstBookgridElement()).toEqual('Rating: 0');
  });
});
describe('when the rating of bookGridElement clicked', () => {
  it('should have a rating of 1', () => {
    page.navigateTo();
    page.getIncreaseButton().click();
    expect(page.getRatingOfFirstBookgridElement()).toEqual('Rating: 1');
  });
});
});
