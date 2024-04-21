import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './top-bar/search-bar/search-bar.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SmallBookViewComponent } from './book/small-book-view/small-book-view.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CheckoutConfirmComponent } from './cart/checkout/checkout-confirm/checkout-confirm.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogClose } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthorComponent } from './about-us/author/author.component';
import { LoginComponent } from './top-bar/login/login.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AboutUsComponent },
      { path: 'search/:searchInput', component: BookSearchComponent },
      { path: 'book/:bookId', component: BookViewComponent},
      { path: 'cart', component: CheckoutComponent},
      { path: 'purchase-history', component: PurchaseHistoryComponent}
    ]),
    MatDialogClose,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchBarComponent,
    AboutUsComponent,
    AuthorComponent,
    BookSearchComponent,
    SmallBookViewComponent,
    BookViewComponent,
    CheckoutComponent,
    CheckoutConfirmComponent,
    LoginComponent,
    PurchaseHistoryComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }

