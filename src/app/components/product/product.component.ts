import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  imports: [MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: Product = new Product();
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    console.log('Product added to cart:', product);
  }
}
