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
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((result: ProductData) => {
      this.products = result && result.data ? result.data : this.products;
    });
  }

  removeProduct(product: Product) {
    // Remove product from UI
    this.products = this.products.filter(filteredProduct => filteredProduct._id !== product._id);
    // Remove product from DB
    this.productService.removeOne(product).subscribe();
  }
}
