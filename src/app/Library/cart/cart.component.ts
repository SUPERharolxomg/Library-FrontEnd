
import { Component, OnInit } from '@angular/core';

import { Book } from '../books/interface/Book.interfaces';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Book[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  checkout() {
    console.log('Proceed to checkout with cash on delivery');
    this.cartService.clearCart(); // Clear cart after checkout
  }
}
