import { Cart } from "../cart/cart";
import { Customer } from "./customer";
import { MemberInterface } from "./member-interface";
import { UserType } from "./user-type";

export class Member extends Customer implements MemberInterface{
    private static _memberIdCounter: number = 0;
    private _memberId: number;
    private _favGenres: {genre: string, purchases: number}[];
    private _checkoutInfo: {address: string, payment: string};
    protected override _type: UserType;
    protected override _cart: Cart;
    protected _purchaseHistory: Cart[];

    constructor(thisInterface?: MemberInterface) {
        super();
        this._memberId = (thisInterface)?thisInterface.memberId:Member._memberIdCounter++;
        this._favGenres = (thisInterface)?thisInterface.favGenres:[];
        this._purchaseHistory = (thisInterface)?thisInterface.purchaseHistory:[];
        this._type = UserType.MEMBER;
        this._cart = (thisInterface)?thisInterface.cart:new Cart();
        this._checkoutInfo = (thisInterface)?thisInterface.checkoutInfo:{address: '', payment: ''};
    }

    override get(): MemberInterface {
        return {
            type: this.type,
            cart: this.cart,
            favGenres: this.favGenres,
            memberId: this.memberId,
            checkoutInfo: this.checkoutInfo,
            purchaseHistory: this.purchaseHistory
        }
    }

    override checkout(): void {
        this.purchaseHistory.unshift(this.cart);
        this._cart = new Cart();
    }

    get memberId(): number {
        return this._memberId;
    }

    get favGenres(): {genre: string, purchases: number}[] {
        return this._favGenres;
    }

    get checkoutInfo(): {address: string, payment: string} {
        return this._checkoutInfo;
    }

    set checkoutInfo(info: {address: string, payment: string}) {
        this._checkoutInfo = info;
    }

    get purchaseHistory(): Cart[] {
        return this._purchaseHistory;
    }
}
