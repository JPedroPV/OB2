import { Book } from "./book";
import { BookType } from "./book-type";
import { PhysicalBookInterface } from "./physical-book-interface";

export class PhysicalBook extends Book implements PhysicalBookInterface{
    private _stock: number;
    private _pages: number;
    protected _type: BookType;

    constructor(thisInterface: PhysicalBookInterface) {
        super(thisInterface);
        this._stock = thisInterface.stock;
        this._pages = thisInterface.pages;
        this._type = BookType.PHYSICAL;
    }

    purchase(): boolean {
        if(this.stock > 0){
            this.stock--;
            return true;
        }
        return false;
    }

    restock(amount: number): void{
        this.stock += amount;
    }

    getInterface(): PhysicalBookInterface {
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
            stock: this.stock,
            pages: this.pages,
            genres: this.genres,
            publisher: this.publisher,
        }
    }

    get stock(): number {
        return this._stock;
    }

    set stock(newStock: number) {
        this._stock = newStock;
    }

    get pages(): number {
        return this._pages;
    }

    set pages(newPages: number) {
        this._pages = newPages;
    }
}
