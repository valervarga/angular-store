/**
 * @file Defines all user related services.
 * @author Valer Varga
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
	constructor(private http: HttpClient) { }

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

	getToken() {
		return localStorage.getItem('token');
	}

	loggedIn(): boolean {
		return !!localStorage.getItem('token');
	}
}
