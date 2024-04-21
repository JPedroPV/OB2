import { Component } from '@angular/core';
import { Book } from '../../book/book';
import { CurrentUserService } from '../../current-user.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutConfirmComponent } from './checkout-confirm/checkout-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  books: Book[] = [];
  cartIndex: number = -1;
  constructor(
    private curUser: CurrentUserService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    this.getCart();
  }

  ngOnInit() {
    this.getCart();
  }

  ngOnChanges() {
    this.getCart();
  }

  getCart() {
    this.books = this.curUser.user.cart.books;
  }

  getIndex() {
    this.cartIndex++;
    return this.cartIndex;
  }

  setIndex(): boolean {
    this.cartIndex = -1;
    return true;
  }

  getTotal() {
    return this.curUser.user.cart.getTotalPrice();
  }

  getCartSize() {
    return this.curUser.user.cart.books.length;
  }

  checkout() {
    if(this.getCartSize() > 0) {
      this.dialog.open(CheckoutConfirmComponent, {
        disableClose: true,
      }).afterClosed().subscribe(result => {
        if(result) {
          this.setIndex();
          this.getCart();
          this._snackBar.open('Purchase Confirmed!', "Ok", {
            duration: 1500
          });
        }
      });
    }
  }
}
