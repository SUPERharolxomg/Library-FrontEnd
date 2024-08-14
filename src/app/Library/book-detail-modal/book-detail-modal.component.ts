import { Component, Inject } from '@angular/core';
import { Book } from '../books/interface/Book.interfaces';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-book-detail-modal',
  templateUrl: './book-detail-modal.component.html',
  styleUrls: ['./book-detail-modal.component.css']
})
export class BookDetailModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Book)
     { }
}
