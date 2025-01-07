import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-ecommerce';
}
