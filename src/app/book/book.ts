import { BookInterface } from './book-interface';
import { BookType } from './book-type';

export abstract class Book implements BookInterface{
  protected abstract _type: BookType;
  private _id: number;
  private static idCounter: number = 0;
  private _title: string;
  private _author: string;
  private _description: string;
  private _price: number;
  private _rating: number;
  private _date: string;
  private _imageUrl: string;
  private _genres: string[];
  private _ratings: number[] = [];
  private _publisher: string;

  constructor(thisInterface: BookInterface) {
    this._id = Book.idCounter++;
    this._title = thisInterface.title;
    this._author = thisInterface.author;
    this._description = thisInterface.description;
    this._price = thisInterface.price;
    this._rating = 0;
    this._date = thisInterface.date;
    this._imageUrl = thisInterface.imageUrl;
    this._genres = thisInterface.genres;
    this._publisher = thisInterface.publisher;
  }

  updateRating(newRating: number): void {
    this._ratings.push(newRating);
    this._rating = this.ratings.reduce((acc, cur) => acc + cur) / this.ratings.length;
  }

  abstract getInterface(): BookInterface;

  abstract purchase(): boolean;

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  get author(): string {
    return this._author;
  }

  set author(newAuthor: string) {
    this._author = newAuthor;
  }

  get description(): string {
    return this._description;
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
  }

  get rating(): number {
    return this._rating;
  }

  get date(): string {
    return this._date;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(newImageUrl: string) {
    this._imageUrl = newImageUrl;
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(newGenres: string[]) {
    this._genres = newGenres;
  }

  addGenres(newGenres: string[]): void {
    this._genres = this._genres.concat(newGenres);
  }

  get ratings(): number[] {
    return this._ratings;
  }

  get type(): BookType {
    return this._type;
  }

  get publisher(): string {
    return this._publisher;
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  getIcon(): string {
    switch (this.type){
      case BookType.PHYSICAL:
        return 'book';
      case BookType.EBOOK:
        return 'picture_as_pdf';
      case BookType.AUDIO:
        return 'album';
      default:
        return 'book';
    }
  }

  getGenres(): string {
    return this.genres.join(', ');
  }

  isPhysical(): boolean {
    return this.type === BookType.PHYSICAL;
  }

  isEbook(): boolean {
    return this.type === BookType.EBOOK;
  }

  isAudio(): boolean {
    return this.type === BookType.AUDIO;
  }
}
