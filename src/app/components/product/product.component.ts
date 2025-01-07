import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';


@Component({
  selector: 'app-product',
  imports: [StarRatingComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  
  constructor(private router: Router) {
    
  }

  openProduct(id?: number) : void {
    this.router.navigate(['/products', id]);
  }

}
