import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	username: String;
	email: String;
	password: String;
	confirm: String;

	productForm: HTMLFormElement;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
		this.productForm = document.querySelector('.js-register-form');
	}
	
	onRegister() {
		if (!this.username) return 'Username is required';
		if (!this.email) return 'Email address is required';
		if (!this.password) return 'Password is required';
		if (this.password !== this.confirm) return 'Passwords don\'t match';

		const newUser = {
			username: this.username,
			email: this.email,
			password: this.password,
			confirm: this.confirm
		}

		// Create user and add to DB
		this.userService.createOne(newUser).subscribe(() => {
			this.router.navigate(['/login']);
			this.productForm.reset();
		});
	}

}
