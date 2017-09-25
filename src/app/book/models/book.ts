export class Book {
  rating = 0;
  thumbnail: string;

  constructor(
    public tilte: string,
    public price: number,
    public authors: string[],
    public isbn: string
  ) {}
}
