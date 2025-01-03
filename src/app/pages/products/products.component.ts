import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) {
   
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
