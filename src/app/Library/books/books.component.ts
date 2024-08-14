import { Component, OnInit } from '@angular/core';
import { BookDetailModalComponent } from '../book-detail-modal/book-detail-modal.component';
import { Book } from './interface/Book.interfaces';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    { title: 'Mi oscuro Romeo', image: 'assets/Books/Libro1.png', description: 'Description 1',autor:'Parker S. Huntington, L.J Shen', price: 10, stars: 4 },
    { title: 'Amxr', image: 'assets/Books/Libro2.png', description: 'Description 2',autor:"César Martínez", price: 15, stars: 5 },
    { title: 'No confies en Asher Hall', image:'assets/Books/Libro3.png', description:'', autor:'Myriam M. Lejardi',price:20,stars:4},
    { title: 'Tan Poca Vida', image:'assets/Books/Libro4.png', description:'', autor:'Hanya Yanagihara',price:20,stars:4},
    { title: 'Los siete maridos de Evelyn Hugo', image:'assets/Books/Libro5.png', description:'', autor:'Taylor Jenkins Reid',price:20,stars:4},
    { title: 'El color de las cosas invisibles', image:'assets/Books/Libro6.png', description:'', autor:'Andrea Longarela',price:20,stars:4},
    { title: 'Reiniciados', image:'assets/Books/Libro7.png', description:'', autor:'Amy Tintera',price:20,stars:4},
    { title: 'La letra pequeña', image:'assets/Books/Libro8.png', description:'', autor:'Lauren Asher',price:20,stars:4},
    { title: 'La Biblioteca de la medianoche', image:'assets/Books/Libro9.png', description:'', autor:'Matt Haig',price:20,stars:4},
    { title: 'Aquiles', image:'assets/Books/Libro10.png', description:'', autor:'Madeline Miller',price:20,stars:4},
    { title: 'Donde viven las Musas', image:'assets/Books/Libro11.png', description:'', autor:'Marianela Dos Santos',price:20,stars:4},
  ];
  chunkedBooks: Book[][] = []; 

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

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