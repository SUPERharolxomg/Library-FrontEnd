import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { Book } from '../books/interface/Book.interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Book[] = [];
  deliveryAddress: string = '';
  totalCost: number = 0;

  constructor(private cartService: CartService,
     private http: HttpClient) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalCost = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increaseQuantity(product: Book) {
    if (!product.quantity) product.quantity = 1;  // Ensure quantity is initialized
    product.quantity += 1;
    this.calculateTotal();
  }
  
  decreaseQuantity(product: Book) {
    if (!product.quantity) product.quantity = 1;  // Ensure quantity is initialized
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.calculateTotal();
    }
  }
  
  submitOrder() {
    const order = {
      address: this.deliveryAddress,
      items: this.cartItems,
      paymentMethod: 'Contra Entrega'
    };

    this.http.post('http://localhost:3000/orders', order).subscribe(
      response => {
        alert('Pedido realizado con éxito');
        // Aquí podrías vaciar el carrito y hacer un reset del formulario si lo deseas
      },
      error => {
        alert('Error al realizar el pedido');
      }
    );
  }
}
