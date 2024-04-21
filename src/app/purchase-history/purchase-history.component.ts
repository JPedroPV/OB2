import { Component } from '@angular/core';
import { Cart } from '../cart/cart';
import { CurrentUserService } from '../current-user.service';
import { UserType } from '../user/user-type';
import { User } from '../user/user';
import { Member } from '../user/member';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css'
})
export class PurchaseHistoryComponent {
  purchaseHistory: Cart[];
  private index: number;

  constructor(
    private curUser: CurrentUserService,
  ) {
    if((this.curUser.user as User).type == UserType.MEMBER) {
      this.purchaseHistory = (this.curUser.user as Member).purchaseHistory;
    }
    else {
      this.purchaseHistory = [];
    }
    this.index = -1;
  }

  noPurchaseHistory(): boolean {
    if(this.curUser.user.type == UserType.MEMBER && (this.curUser.user as Member).purchaseHistory.length > 0) {
      return false;
    }
    return true;
  }
}
