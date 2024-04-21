import { Book } from "../book/book";
import { CartIterator } from "./cart-iterator";

export class Cart {
    private _books: Book[];

    constructor() {
        this._books = [];
        console.log('Cart created');
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(book: Book): void {
        const index = this._books.indexOf(book);
        if (index !== -1) {
            this._books.splice(index, 1);
        }
    }

    iterator(): CartIterator {
        return new CartIterator(this.books);
    }

    getTotalPrice(): number {
        const iter = this.iterator();
        var total = 0;
        while (iter.hasNext()) {
            total += iter.next().value.price;
        }
        return total;
    }

    get books(): Book[] {
        return this._books;
    }

    removeBookWithIndex(index: number): void {
        this._books.splice(index, 1);
    }
}
