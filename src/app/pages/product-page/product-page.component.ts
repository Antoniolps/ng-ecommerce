import { Component } from '@angular/core';
import { Product, CartProduct } from '../../models/product/Product';
import { ProductService } from '../../services/api/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, RouterModule, StarRatingComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  product!: Product;
  productID!: number;

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute,
    private titleService: Title
  ) {

  }

  ngOnInit() {
    this.productID = this.route.snapshot.params['id'];
    this.getProduct(this.productID);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
        this.titleService.setTitle(data.title);
      },
    });
    
  }

  //This method will be used to handle if the product will be added to the local cart or the API cart.
  addToCart(product: Product): void {
    this.addToLocalCart(product);
    alert('Product added to cart!');
  }

  addToLocalCart(product: Product) {
    let cart = localStorage.getItem('cart');

    if (!cart) {
      cart = '[]';
    }

    let cartArray = JSON.parse(cart);
    let productIndex = cartArray.findIndex((c: CartProduct) => c.product.id === product.id);

    if (productIndex === -1) {
      let newProduct = new CartProduct(product, 1);
      cartArray.push(newProduct);
      console.log('Product added to cart:', product);
    } else {
      cartArray[productIndex].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

}



