import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
	providedIn: 'root'
})
export class UserGuard implements CanActivate {
	constructor(private userService: UserService, private router: Router) { }

	canActivate(): boolean {
		if (this.userService.isAuthenticated()) return true;

		this.userService.logout();
		this.router.navigate(['/login']);
		return false;
	}
}