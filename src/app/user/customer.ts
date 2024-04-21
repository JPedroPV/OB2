import { Book } from "../book/book";
import { Cart } from "../cart/cart";
import { CurrentUserService } from "../current-user.service";
import { CustomerInterface } from "./customer-interface";
import { User } from "./user";
import { UserType } from "./user-type";

export class Customer extends User implements CustomerInterface{
    protected _cart: Cart;
    protected _type: UserType;

    constructor() {
        super();
        this._cart = new Cart();
        this._type = UserType.CUSTOMER;
    }

    get(): CustomerInterface {
        return {
            type: this.type,
            cart: this.cart,
        }
    }

    addToCart(item: Book): void {
        this.cart.addBook(item);
    }

    checkout(): void  {
        this._cart = new Cart();
    }

    get cart(): Cart {
        return this._cart;
    }
}
