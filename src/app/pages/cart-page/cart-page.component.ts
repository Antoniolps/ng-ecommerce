import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartProduct, Product } from '../../models/product/Product';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  constructor(
    private router: Router,
    private toastrService: ToastrService
  ) { }

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

  removeFromCart(product: CartProduct) {
    this.cart = this.cart.filter(p => p.product.id !== product.product.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.calculateCartSum();
    this.toastrService.error('Produto removido do carrinho', 'Carrinho 🛒');
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
    this.calculateCartSum();
    this.toastrService.error('Todos os produtos foram removidos', 'Carrinho 🛒');
  }

  encrementQuantity(product: CartProduct) {
    let cart = localStorage.getItem('cart');
    if (cart) {
      let cartArray = JSON.parse(cart);
      let productIndex = cartArray.findIndex((c: CartProduct) => c.product.id === product.product.id);

      if (productIndex !== -1) {
        cartArray[productIndex].quantity++;
        localStorage.setItem('cart', JSON.stringify(cartArray));
        this.calculateCartSum();
      }

      this.refreshCart();
    }
  }

  decrementQuantity(product: CartProduct) {
    let cart = localStorage.getItem('cart');
    if (cart) {
      let cartArray = JSON.parse(cart);
      let productIndex = cartArray.findIndex((c: CartProduct) => c.product.id === product.product.id);

      if (productIndex !== -1 && cartArray[productIndex].quantity > 1) {
        cartArray[productIndex].quantity--;
        localStorage.setItem('cart', JSON.stringify(cartArray));
        this.calculateCartSum();
      }

      this.refreshCart();
    }
  }

  refreshCart() {
    let cart = localStorage.getItem('cart');

    if (cart) {
      this.cart = JSON.parse(cart);
      this.calculateCartSum();
    }

  }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToProduct(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
