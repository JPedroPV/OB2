import { BookBuilder } from "./book-builder";
import { BookType } from "./book-type";
import { EBook } from "./e-book";
import { EBookInterface } from "./e-book-interface";

export class EBookBuilder implements BookBuilder{
    private eBook: EBookInterface;

    constructor(){
        this.eBook = {
            type: BookType.EBOOK,
            id: 0,
            title: 'Title',
            author: 'Jane Doe',
            description: 'This is a book.',
            price: 9.99,
            rating: 0,
            date: '01-01-1984',
            imageUrl: 'assets/ruhroh.png',
            pages: 20,
            genres: [],
            publisher: 'N/A'
        };
    }

    make(): EBook {
        return new EBook(this.eBook);
    }

    addDate(date: string): void {
        this.eBook.date = date;
    }

    addTitle(title: string): void {
        this.eBook.title = title;
    }

    addAuthor(author: string): void {
        this.eBook.author = author;
    }

    addDescription(description: string): void {
        this.eBook.description = description;
    }

    addPrice(price: number): void {
        this.eBook.price = price;
    }

    addImageUrl(imageUrl: string): void {
        this.eBook.imageUrl = imageUrl;
    }

    setGenres(genres: string[]): void {
        this.eBook.genres = genres;
    }

    addGenres(genres: string[]): void {
        this.eBook.genres = this.eBook.genres.concat(genres);
    }

    addPages(pages: number): void {
        this.eBook.pages = pages;
    }

    addPublisher(publisher: string): void {
        this.eBook.publisher = publisher;
    }
}
