import { Component } from '@angular/core';
import { CurrentUserService } from '../../../current-user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserType } from '../../../user/user-type';
import { Member } from '../../../user/member';
import { User } from '../../../user/user';
import { Customer } from '../../../user/customer';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
  styleUrl: './checkout-confirm.component.css'
})
export class CheckoutConfirmComponent {
  customer: any = this.curUser.user;
  address: string;
  payment: string;
  disable: boolean = true;
  saveInfo: boolean = false;

  constructor (
    private curUser: CurrentUserService,
    public dialogRef: MatDialogRef<CheckoutConfirmComponent>,
  ) {
    this.address = this.isMember()?(this.curUser.user as Member).checkoutInfo.address:'';
    this.payment = this.isMember()?(this.curUser.user as Member).checkoutInfo.payment:'';
  }
  onCheckout() {
    (this.curUser.user as Customer).checkout();
    console.log(this.address);
    if(this.isMember() && this.saveInfo) {
      (this.curUser.user as Member).checkoutInfo = ({
        address: this.address,
        payment: this.payment,
      });
      console.log('Checkout info saved');
    }
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  setTerms(terms: boolean) {
    this.disable = !terms;
  }

  saveCheckoutInfo(save: boolean) {
    this.saveInfo = save;
  }

  isMember(): boolean {
    return (this.curUser.user as User).type == UserType.MEMBER;
  }
}
