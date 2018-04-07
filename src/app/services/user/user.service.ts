import { URL_SERVER } from './../../config/config';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import swal from 'sweetalert2';

@Injectable()
export class UserService {

  user: User;
  token: string;
  menu: any;

  basicUrl = URL_SERVER;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  /* This function creates a new user through the register page.
  * @params: User
  * @return: Observable
  */
  createUser(user: User) {
    const url = `${this.basicUrl}/users`;
    return this.http.post(url, user)
      .map((res: any) => {
        swal('Great', 'User created successfully', 'success');
        return res.user;
      })
      .catch((err) => {
        swal(err.error.message, err.error.errors.message, 'warning');
        return Observable.throw(err);
      });
  }

   /* This logins the user through the login page.
  * @params: User, boolean
  * @return: Observable
  */
  login(user: User, rememberMe: boolean = false): Observable<boolean> {

    if (rememberMe) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = `${this.basicUrl}/login`;
    return this.http.post(url, user)
      .map((res: any) => {
        this.user = res.user;
        this.menu = res.menu;
        this.saveStorage( res.user._id, this.user, this.menu, res.token);
        return true;
      })
      .catch((err) => {
        swal('Sorry!', err.error.message, 'error');
        return Observable.throw(err);
      });
  }

  /* This logins the user through google api.
  * @params: User, boolean
  * @return: Observable
  */
  loginGoogle(token): Observable<void> {
    const url = `${URL_SERVER}/login/google`;

    return this.http.post(url, {})
      .map((res: any) => {
        this.user = res.user;
        this.menu = res.menu;
        console.log('menu in userService', this.menu);
        this.saveStorage( res.user._id, this.user, this.menu, res.token);
      })
      .catch((err) => {
        console.log('this is the error', err);
        swal('Sorry', err, 'error');
        return Observable.throw(err);
      });
  }

  /*
  * This functions save user data into the local storage.
  * @params: id, User, token
  */
  saveStorage( id: string, user: User, menu: any, token?: string) {
    localStorage.setItem('id', id);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('menu', JSON.stringify(menu));
    if (token) {
    localStorage.setItem('token', token);
    }

    this.user = user;
    this.token = token;
  }

  /*
  * This functions checks if the user is logged in.
  * @return: boolean
  */
  isLoggedIn(): boolean {
    console.log('checking...');
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
    this.menu = JSON.parse(localStorage.getItem('menu'));


    return (!!this.token) ? true : false;
  }

  /*
  * This functions removes all info from localStorage and navigates to the login page.
  */
  logOut(): void {
    this.user = null;
    this.token = null;
    this.menu = [];

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('menu');

    this.router.navigate(['/login']);
  }

  /*
  * This functions edits User.
  * @params: User
  * @return: Observable<boolean>
  */
  updateUser(user: User): Observable<boolean> {
    const url = `${URL_SERVER}/users/${user._id}`;

    return this.http.put(url, user)
      .map((res: any) => {
        if (user._id === this.user._id) {
          this.user = res.user;
          this.saveStorage( this.user._id, this.user, this.menu);
        }
        swal('Cool', 'User updated successfully', 'success');
        return true;
      })
      .catch((err) => {
        swal(err.error.message, err.error.errors.message, 'warning');
        return Observable.throw(err);
      });
  }

  /*
  * This functions get all array of Users.
  * @params: number
  * @return: Observable<Users[]>
  */
  getUsers(from: number = 0) {
    const url = `${URL_SERVER}/users?from=${from}`;
    return this.http.get(url);

  }

  /*
  * This functions to find Users by term.
  * @params: term:string
  * @return: Observable<Users[]>
  */
  getUsersByTerm(term: string) {
    const url = `${URL_SERVER}/search/collection/users/${term}`;
    return this.http.get(url);
  }

 /*
  * This functions delete User.
  * @params: term:string
  * @return: Observable<Users[]>
  */
  deleteUser(id: string) {
    const url = `${URL_SERVER}/users/${id}`;
    return this.http.delete(url);
  }

}
