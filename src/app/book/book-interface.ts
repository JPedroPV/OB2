import { BookType } from './book-type';

export interface BookInterface {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    rating: number;
    date: string;
    imageUrl: string;
    genres: string[];
    type: BookType;
    publisher: string;
}
