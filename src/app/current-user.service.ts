import { Injectable } from '@angular/core';
import { Member } from './user/member';
import { Cart } from './cart/cart';
import { UserType } from './user/user-type';
import { BooksService } from './book/books.service';
import { Customer } from './user/customer';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private _user: any = new Customer();

  constructor(
    private booksService: BooksService,
  ) { }

  get user() {
    return this._user
  }

  loginMember() {
    this._user = new Member({
        memberId: 42,
        favGenres: [
          {genre: 'Fiction', purchases: 3},
          {genre: 'Non-Fiction', purchases: 2},
          {genre: 'Mystery', purchases: 1},
        ],
        checkoutInfo: {
          address: '1234 Elm St.',
          payment: 'Visa'
        },
        cart: new Cart(),
        type: UserType.MEMBER,
        purchaseHistory: []
      }
    );
    this._user.cart.addBook(this.booksService.getBooks()[14]);
    this._user.cart.addBook(this.booksService.getBooks()[8]);
  }

  loginGuest() {
    this._user = new Customer();
  }
}
