import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  product!: Product;
  productID!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.productID = this.route.snapshot.params['id'];
    this.getProduct(this.productID);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(product: Product) {
    localStorage.setItem('cart', JSON.stringify(product));
  }
  
}
