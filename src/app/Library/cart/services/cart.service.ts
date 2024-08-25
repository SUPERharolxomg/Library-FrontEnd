import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../books/interface/Book.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Book[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  addToCart(book: Book) {
    const existingBook = this.cartItems.find(item => item.idBooks === book.idBooks);
    if (existingBook) {
      existingBook.quantity = (existingBook.quantity || 0) + 1;
    } else {
      this.cartItems.push({ ...book, quantity: 1 });
    }
    this.cartItemCount.next(this.cartItems.length);
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }
}
