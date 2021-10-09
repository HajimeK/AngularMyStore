import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  activeProduct: Product = {id: 0, name: '', description: '', url: '', price: -1};

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // API call
    return this.http.get<Product[]>('../../assets/data.json');
  }
}
