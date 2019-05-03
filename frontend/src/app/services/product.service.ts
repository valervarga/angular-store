/**
 * @file Defines all product related services.
 * @author Valer Varga
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  // CREATE
  createOne(product):Observable<Product> {
    return this.http.post<Product>(`${config.BASE_API}/products`, product, httpOptions);
  }

  // READ
  getAll():Observable<ProductData> {
    return this.http.get<ProductData>(`${config.BASE_API}/products`);
  }

  // UPDATE
  updateOne(product, _id: string):Observable<Product> {
    const url = `${config.BASE_API}/products/${_id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  // DELETE
  removeOne(product):Observable<Product> {
    const url = `${config.BASE_API}/products/${product._id}/remove`;
    return this.http.delete<Product>(url, httpOptions);
  }
}
