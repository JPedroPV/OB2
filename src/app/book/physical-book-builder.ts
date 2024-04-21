import { BookBuilder } from "./book-builder";
import { BookType } from "./book-type";
import { PhysicalBook } from "./physical-book";
import { PhysicalBookInterface } from "./physical-book-interface";

export class PhysicalBookBuilder implements BookBuilder{
    private physicalBook: PhysicalBookInterface;

    constructor(){
        this.physicalBook = {
            type: BookType.PHYSICAL,
            id: 0,
            title: 'Title',
            author: 'Jane Doe',
            description: 'This is a book.',
            price: 9.99,
            rating: 0,
            date: '01-01-1984',
            imageUrl: 'assets/ruhroh.png',
            stock: 20,
            pages: 20,
            genres: [],
            publisher: 'N/A',
        };
    }

    make() {
        return new PhysicalBook(this.physicalBook);
    }

    addDate(date: string): void {
        this.physicalBook.date = date;
    }

    addTitle(title: string): void {
        this.physicalBook.title = title;
    }

    addAuthor(author: string): void {
        this.physicalBook.author = author;
    }

    addDescription(description: string): void {
        this.physicalBook.description = description;
    }

    addPrice(price: number): void {
        this.physicalBook.price = price;
    }

    addImageUrl(imageUrl: string): void {
        this.physicalBook.imageUrl = imageUrl;
    }

    setGenres(genres: string[]): void {
        this.physicalBook.genres = genres;
    }

    addGenres(genres: string[]): void {
        this.physicalBook.genres = this.physicalBook.genres.concat(genres);
    }

    addStock(stock: number): void {
        this.physicalBook.stock = stock;
    }

    addPages(pages: number): void {
        this.physicalBook.pages = pages;
    }

    addPublisher(publisher: string): void {
        this.physicalBook.publisher = publisher;
    }
}
