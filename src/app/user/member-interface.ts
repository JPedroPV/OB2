import { Cart } from "../cart/cart";
import { CustomerInterface } from "./customer-interface";

export interface MemberInterface extends CustomerInterface{
    memberId: number;
    favGenres: {genre: string, purchases: number}[];
    checkoutInfo: {address: string, payment: string};
    purchaseHistory: Cart[];
}
