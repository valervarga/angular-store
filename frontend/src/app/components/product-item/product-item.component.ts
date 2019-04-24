import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

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
}
