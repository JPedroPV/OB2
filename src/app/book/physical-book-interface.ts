import { BookInterface } from "./book-interface";

export interface PhysicalBookInterface extends BookInterface {
    stock: number;
    pages: number;
}
