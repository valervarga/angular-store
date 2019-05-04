/**
 * @file Defines all user related services.
 * @author Valer Varga
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/User';

import config from '../../build.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
	constructor(
		private http: HttpClient,
		private router: Router,
		private jwtHelper: JwtHelperService
	) { }

	// CREATE
	createOne(user):Observable<User> {
		const url = `${config.BASE_API}/users`;
		return this.http.post<User>(url, user, httpOptions);
	}
	
	// READ
	getUser(user):Observable<any> {
		const url = `${config.BASE_API}/users/login`;
		return this.http.post(url, user, httpOptions);
	}

	// TOKENS
	setToken(token: string): void {
		localStorage.setItem('token', token);
	}

	getToken(): string {
		return localStorage.getItem('token');
	}

	// USER
	logout() {
		localStorage.removeItem('token');
		this.router.navigate(['/login']);
	}

	isAuthenticated(): boolean {
		const token = this.getToken();

		// Check whether the token is expired
		return !this.jwtHelper.isTokenExpired(token);
	}
}
