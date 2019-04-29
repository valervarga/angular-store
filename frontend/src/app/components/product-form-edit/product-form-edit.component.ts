import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-form-edit',
  templateUrl: './product-form-edit.component.html',
  styleUrls: ['./product-form-edit.component.css']
})
export class ProductFormEditComponent implements OnInit {
  @Input() editedProduct: Product;

  productEditTitle: HTMLInputElement;
  productEditDescription: HTMLInputElement;
  productEditAvailable: HTMLInputElement;
  productEditPrice: HTMLInputElement;
  formContainer: HTMLElement = document.querySelector('.js-product-edit-form-container');
  form: HTMLFormElement = document.querySelector('.js-product-edit-form');
  activeForm: string = 'form--edit-visible';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.formContainer = document.querySelector('.js-product-edit-form-container');
    this.form = document.querySelector('.js-product-edit-form');
  }

  onSubmit() {
    const productEditTitle = <HTMLInputElement>document.getElementById('product-edit-title');
    const productEditDescription = <HTMLInputElement>document.getElementById('product-edit-description');
    const productEditAvailable = <HTMLInputElement>document.getElementById('product-edit-available');
    const productEditPrice = <HTMLInputElement>document.getElementById('product-edit-price');

    const _id = this.editedProduct._id;
    const product = {
      title: productEditTitle.value ? productEditTitle.value : '',
      description: productEditDescription.value ? productEditDescription.value : '',
      available: productEditAvailable.checked,
      price: productEditPrice.value ? Number(productEditPrice.value) : 0
    };

    // Update product and update in DB
    this.productService.updateOne(product, _id).subscribe();

    // Update UI
    for (let key in product ) {
      this.editedProduct[key] = product[key];
    }

    this.formContainer.classList.remove(this.activeForm);
    this.form.reset();
  }

  closeForm() {
    this.form.reset();
    this.formContainer.classList.remove(this.activeForm);
  }
}
