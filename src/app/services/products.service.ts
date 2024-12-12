import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 

  }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
