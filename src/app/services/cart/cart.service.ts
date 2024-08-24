// cart.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../../Library/books/interface/Book.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Book[] = [];

  addToCart(book: Book) {
    this.cartItems.push(book);
  }

  getCartItems(): Book[] {
    return this.cartItems;
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }

  clearCart() {
    this.cartItems = [];
  }
}
