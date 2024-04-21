import { Book } from "../book/book";

export abstract class Recommendations {
    private _mostPopular: Book[];

    constructor() {
        this._mostPopular = [];
    }

    get mostPopular(): Book[] {
        return this._mostPopular;
    }

    findMostPopular(): Book[] {
        this._mostPopular = this.getRecommendations();
        return this._mostPopular;
    }

    abstract getRecommendations(): Book[];
}
