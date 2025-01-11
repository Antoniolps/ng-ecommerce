import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartProduct } from '../../models/product';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cart: CartProduct[] = [];
  cartSum: number = 0;

  ngOnInit() {
    let cart = localStorage.getItem('cart');
    
    if(cart){
      this.cart = JSON.parse(cart);
    }

    this.calculateCartSum();
  }

  calculateCartSum() {
    this.cartSum = this.cart.reduce((sum, product) => {
      if (product.product && product.product.price) {
        return sum + product.product.price * product.quantity;
      }
      return sum;
    }, 0);
  }
}
