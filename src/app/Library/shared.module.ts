import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BookDetailModalComponent } from './book-detail-modal/book-detail-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './users/users.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BooksComponent,
    BookDetailModalComponent,
    CartComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    BooksComponent,
  ]
})
export class SharedModule { }
