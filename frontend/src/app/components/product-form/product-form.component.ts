import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() createProduct: EventEmitter<any> = new EventEmitter;

  productTitle: string;
  productPrice: number;
  productAvailable: boolean;
  productDescription: string;

  productForm: HTMLFormElement;
  productPriceInput: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.productForm = document.querySelector('.js-product-form');
  }

  onSubmit() {
    if (!this.productTitle) return 'Title is required';
    if (!this.productDescription) return 'Description is required';
    if (isNaN(this.productPrice)) return 'Price is required';

    const product = {
      title: this.productTitle,
      description: this.productDescription,
      available: !!this.productAvailable,
      price: Number(this.productPrice)
    };

    this.createProduct.emit(product);
    this.productForm.reset();
  }
}
