import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailModalComponent } from '../book-detail-modal/book-detail-modal.component';
import { Book } from './interface/Book.interfaces';
import { BookService } from './services/Books.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  chunkedBooks: Book[][] = []; 

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
        // Aquí puedes implementar la lógica para dividir los libros en 'chunks' si es necesario
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
    console.log('Book added to cart:', book);
  }
}
