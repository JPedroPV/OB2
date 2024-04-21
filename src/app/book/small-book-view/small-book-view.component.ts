import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { BookType } from '../book-type';
import { CurrentUserService } from '../../current-user.service';

@Component({
  selector: 'app-small-book-view',
  templateUrl: './small-book-view.component.html',
  styleUrl: './small-book-view.component.css'
})
export class SmallBookViewComponent {
  @Input() book!: Book;
  @Input() cartIndex: number = -1;

  constructor(private curUser: CurrentUserService) { }

  removeBook() {
    if (this.cartIndex !== -1) {
      this.curUser.user.cart.removeBookWithIndex(this.cartIndex);
    }
  }

  isInCart() {
    return this.cartIndex !== -1;
  }

  getIconText(): string {
    switch(this.book.type) {
      case BookType.PHYSICAL:
        return 'Physical';
      case BookType.EBOOK:
        return 'Ebook';
      case BookType.AUDIO:
        return 'Audiobook';
      default:
        return 'Unknown';
    }
  }
  }
