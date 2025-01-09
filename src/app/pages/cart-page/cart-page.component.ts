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

  ngOnInit() {
    let cart = localStorage.getItem('cart');
    
    if(cart){
      this.cart = JSON.parse(cart);
    }
  }
}
