import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../../models/Product';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, MatGridListModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService) {
    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
