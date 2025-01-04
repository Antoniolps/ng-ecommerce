import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  
  constructor(private router: Router) {
    
  }

  openProduct(id?: number) : void {
    this.router.navigate(['/product', id]);
  }

}
