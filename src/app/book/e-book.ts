import { Book } from "./book";
import { BookType } from "./book-type";
import { EBookInterface } from "./e-book-interface";

export class EBook extends Book implements EBookInterface{
    private _pages: number;
    protected _type: BookType;

    constructor(thisInterface: EBookInterface) {
        super(thisInterface);
        this._pages = thisInterface.pages;
        this._type = BookType.EBOOK;
    }

    purchase(): boolean {
        return true;
    }

    getInterface(): EBookInterface {
        return {
            type: this.type,
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
            price: this.price,
            rating: this.rating,
            date: this.date,
            imageUrl: this.imageUrl,
            pages: this.pages,
            genres: this.genres,
            publisher: this.publisher,
        }
    }

    get pages(): number {
        return this._pages;
    }

    set pages(newPages: number) {
        this._pages = newPages;
    }
}
