import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        _id: 'unique-id-one',
        title: 'Product Title One',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, placeat? Ad in vitae natus culpa tempora minus molestiae, rerum possimus?',
        available: true,
        price: 150
      },
      {
        _id: 'unique-id-two',
        title: 'Product Title Two',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit tempora minus molestiae, rerum possimus?',
        available: false,
        price: 75
      },
      {
        _id: 'unique-id-three',
        title: 'Product Title Three',
        description: 'Voluptate, placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, placeat? Ad in vitae natus culpa tempora minus molestiae, rerum possimus?',
        available: true,
        price: 330
      }
    ]
  }

}
