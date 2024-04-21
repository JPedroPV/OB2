import { BookInterface } from "./book-interface";

export interface AudioBookInterface extends BookInterface{
    lengthSeconds: number;
    narrator: string;
}
