import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  // Set Classes
  setClasses() {
    const classes = {
      'product__item-state--available': this.product.available,
      'product__item-state--non-available': !this.product.available,
    }

    return classes;
  }

  // Remove Product
  onDelete(product: Product) {
    this.removeProduct.emit(product);
  }
}
