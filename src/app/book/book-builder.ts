import { Book } from "./book";

export interface BookBuilder {
    make(): Book;
    addTitle(title: string): void;
    addAuthor(author: string): void;
    addDate(date: string): void;
    addDescription(description: string): void;
    addPrice(price: number): void;
    addImageUrl(imageUrl: string): void;
    setGenres(genres: string[]): void;
    addGenres(genres: string[]): void;
    addPublisher(publisher: string): void;
}
