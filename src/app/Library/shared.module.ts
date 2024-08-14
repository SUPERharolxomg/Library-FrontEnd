import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BookDetailModalComponent } from './book-detail-modal/book-detail-modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BooksComponent,
    BookDetailModalComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    NavbarComponent,
    BooksComponent,
  ]
})
export class SharedModule { }
