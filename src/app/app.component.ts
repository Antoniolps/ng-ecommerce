import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, HeaderComponent, ProductPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-ecommerce';
}
