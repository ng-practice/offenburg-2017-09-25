export class Book {
  rating = 0;
  cover: string;
  description: string;

  constructor(
    public title: string,
    public price: number,
    public authors: string[],
    public isbn: string
  ) {}
}
