import { AudioBook } from "./audio-book";
import { AudioBookInterface } from "./audio-book-interface";
import { BookBuilder } from "./book-builder";
import { BookType } from "./book-type";

export class AudioBookBuilder implements BookBuilder{
    private audioBook: AudioBookInterface;

    constructor() {
        this.audioBook = {
            type: BookType.AUDIO,
            id: 0,
            title: 'Title',
            author: 'Jane Doe',
            description: 'This is a book.',
            price: 9.99,
            rating: 0,
            date: '01-01-1984',
            imageUrl: 'assets/ruhroh.png',
            genres: [],
            lengthSeconds: 90,
            narrator: 'John Doe',
            publisher: 'N/A',
        };
    }

    make(): AudioBook {
        return new AudioBook(this.audioBook);
    }

    addTitle(title: string): void {
        this.audioBook.title = title;
    }

    addAuthor(author: string): void {
        this.audioBook.author = author;
    }

    addDescription(description: string): void {
        this.audioBook.description = description;
    }

    addPrice(price: number): void {
        this.audioBook.price = price;
    }

    addImageUrl(imageUrl: string): void {
        this.audioBook.imageUrl = imageUrl;
    }

    setGenres(genres: string[]): void {
        this.audioBook.genres = genres;
    }

    addGenres(genres: string[]): void {
        this.audioBook.genres = this.audioBook.genres.concat(genres);
    }

    addLengthSeconds(lengthSeconds: number): void {
        this.audioBook.lengthSeconds = lengthSeconds;
    }

    addNarrator(narrator: string): void {
        this.audioBook.narrator = narrator;
    }

    addDate(date: string): void {
        this.audioBook.date = date;
    }

    addPublisher(publisher: string): void {
        this.audioBook.publisher = publisher;
    }
}
