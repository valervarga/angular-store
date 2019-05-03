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
  editedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((result: ProductData) => {
      this.products = result && result.data ? result.data : this.products;
    });
  }

  // CREATE
  createProduct(product: Product) {
    // Create product and add to DB
    this.productService.createOne(product).subscribe((newProduct: any) => {
      if (!newProduct && !newProduct.data) return;
      
      // Update UI with new product
      this.products.push(newProduct.data);
    });
  }

  updateProduct(product: Product) {
    this.editedProduct = product;
  }

  // DELETE
  removeProduct(product: Product) {
    // Remove product from UI
    this.products = this.products.filter(filteredProduct => filteredProduct._id !== product._id);
    // Remove product from DB
    this.productService.removeOne(product).subscribe();
  }
}
