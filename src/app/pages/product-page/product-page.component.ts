import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/api/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, RouterModule, StarRatingComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  product?: Product;
  productID!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.productID = this.route.snapshot.params['id'];
    this.getProduct(this.productID);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }

  addToCart(product: Product) {
    localStorage.setItem('cart', JSON.stringify(product));
  }
  
}
