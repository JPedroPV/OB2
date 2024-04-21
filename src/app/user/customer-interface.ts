import { Cart } from "../cart/cart";
import { UserInterface } from "./user-interface";

export interface CustomerInterface extends UserInterface {
    cart: Cart;
}
