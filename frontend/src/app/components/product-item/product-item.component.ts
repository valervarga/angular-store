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
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter;

  activeForm: string = 'form--edit-visible';
  formContainer: HTMLElement;
  productTitle: HTMLInputElement;
  productDescription: HTMLInputElement;
  productAvailable: HTMLInputElement;
  productPrice: HTMLInputElement;

  constructor() {}

  ngOnInit() {
    this.formContainer = document.querySelector('.js-product-edit-form-container');
    this.productTitle = <HTMLInputElement>document.getElementById('product-edit-title');
    this.productDescription = <HTMLInputElement>document.getElementById('product-edit-description');
    this.productAvailable = <HTMLInputElement>document.getElementById('product-edit-available');
    this.productPrice = <HTMLInputElement>document.getElementById('product-edit-price');
  }

  // Set Classes
  setClasses() {
    const classes = {
      'product__item-state--available': this.product.available,
      'product__item-state--non-available': !this.product.available,
    }

    return classes;
  }

  // Edit Product
  onEdit(product: Product) {
    // Populate Edit Form
    this.productTitle.value = product.title;
    this.productDescription.value = product.description;
    this.productAvailable.checked = product.available;
    this.productPrice.value = String(product.price);

    // Show Edit Form
    this.formContainer.classList.add(this.activeForm);
    this.updateProduct.emit(product);
  }

  // Remove Product
  onDelete(product: Product) {
    this.removeProduct.emit(product);
  }
}
