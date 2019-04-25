import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductData } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((result: ProductData) => {
      const products = result && result.data;
      this.products = products;
    });
  }
}
