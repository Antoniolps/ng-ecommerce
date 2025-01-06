import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  loading$?: Observable<boolean>;
  loading?: boolean;

  constructor(private loaderService: LoaderService) {
    
  }

  ngOnInit(): void {
    this.loading$ = this.loaderService.loading$;
    this.loading$.subscribe((value) => {
      this.loading = value;
    })
  }

  
}
