import { Book } from "../book/book";
import { Cart } from "./cart";

export class CartIterator implements Iterator<Book, Book>{
    constructor(private cart: Book[], private index: number = 0) {}

    next(): IteratorResult<Book, Book> {
        if (this.index < this.cart.length) {
            return {
                done: false,
                value: this.cart[this.index++]
            }
        } else {
            return {
                done: true,
                value: this.cart[this.index]
            }
        }
    }

    hasNext(): boolean {
        return this.index < this.cart.length;
    }
}
