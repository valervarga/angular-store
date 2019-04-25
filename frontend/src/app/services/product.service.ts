import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductData } from '../interfaces/Product';

import config from '../../build.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll():Observable<ProductData> {
    return this.http.get<ProductData>(`${config.BASE_API}/products`);
  }
}
