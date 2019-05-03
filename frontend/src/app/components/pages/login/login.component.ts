import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: String;
	password: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
	}

	onLogin() {
		const loginData = {
			username: this.username,
			password: this.password
		}

		this.userService.getUser(loginData).subscribe((data: any) => {
			if (!data && !data.token) return;

			this.router.navigate(['/store']);
			this.userService.setToken(data.token);
		});
	}
}
