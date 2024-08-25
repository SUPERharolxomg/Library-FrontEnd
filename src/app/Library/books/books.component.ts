import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailModalComponent } from '../book-detail-modal/book-detail-modal.component';
import { Book } from './interface/Book.interfaces';
import { BookService } from './services/Books.service'; // Asegúrate de que la ruta sea correcta
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  chunkedBooks: Book[][] = []; 

  constructor(
    private bookService: BookService, 
    private dialog: MatDialog,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      error => {
        console.error('Error al cargar los libros:', error);
      }
    );
  }

  viewBook(book: Book) {
    this.dialog.open(BookDetailModalComponent, {
      data: book,
      width: '600px'
    });
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
