import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductData } from '../interfaces/Product';
import { Product } from '../models/Product';

import config from '../../build.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll():Observable<ProductData> {
    return this.http.get<ProductData>(`${config.BASE_API}/products`);
  }
  
  removeOne(product):Observable<Product> {
    const url = `${config.BASE_API}/products/${product._id}/remove`;
    return this.http.delete<Product>(url, httpOptions);
  }
  
  createOne(product):Observable<Product> {
    return this.http.post<Product>(`${config.BASE_API}/products`, product, httpOptions);
  }
}
