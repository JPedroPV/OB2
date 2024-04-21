import { AudioBookInterface } from "./audio-book-interface";
import { Book } from "./book";
import { BookType } from "./book-type";

export class AudioBook extends Book implements AudioBookInterface{
    private _lengthSeconds: number;
    private _narrator: string;
    protected _type: BookType;

    constructor(thisInterface: AudioBookInterface) {
        super(thisInterface);
        this._lengthSeconds = thisInterface.lengthSeconds;
        this._narrator = thisInterface.narrator;
        this._type = BookType.AUDIO;
    }

    purchase(): boolean {
        return true;
    }

    getInterface(): AudioBookInterface {
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
            lengthSeconds: this.lengthSeconds,
            narrator: this.narrator,
            genres: this.genres,
            publisher: this.publisher,
        }
    }

    getLengthString(): string {
        return `${Math.floor(this.lengthSeconds / 60)}:${this.lengthSeconds % 60}`;
    }

    get lengthSeconds(): number {
        return this._lengthSeconds;
    }

    set lengthSeconds(newLengthSeconds: number) {
        this._lengthSeconds = newLengthSeconds;
    }

    get narrator(): string {
        return this._narrator;
    }

    set narrator(newNarrator: string) {
        this._narrator = newNarrator;
    }
}
