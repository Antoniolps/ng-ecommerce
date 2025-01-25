import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { Rating } from '../../models/product/Product';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating?: Rating;
  stars: ('full' | 'half' | 'empty')[] = [];

  ngOnChanges(): void {
    this.calculateStars();
  }

  private calculateStars(): void {
    if(this.rating?.rate === undefined) {
      return
    }

    this.stars = [];
    const fullStars = Math.floor(this.rating.rate);
    const hasHalfStar = this.rating.rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      this.stars.push('full');
    }

    if (hasHalfStar) {
      this.stars.push('half');
    }

    for (let i = 0; i < emptyStars; i++) {
      this.stars.push('empty');
    }
  }
}
