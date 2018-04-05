import { URL_SERVER } from './../../config/config';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import swal from 'sweetalert2';

@Injectable()
export class UserService {

  user: User;

  token: string;

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
        this.saveStorage( res.user._id, this.user, res.token);
        return true;
      });
  }

  /* This logins the user through google api.
  * @params: User, boolean
  * @return: Observable
  */
  loginGoogle(token): Observable<boolean> {
    const url = `${URL_SERVER}/login/google`;

    return this.http.post(url, {})
    .map((res: any) => {
      this.user = res.user;
      this.saveStorage( res.user._id, this.user, res.token);
      return true;
    });
  }

  /*
  * This functions save user data into the local storage.
  * @params: id, User, token
  */
  saveStorage( id: string, user: User, token?: string) {
    localStorage.setItem('id', id);
    localStorage.setItem('user', JSON.stringify(user));
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

    return (!!this.token) ? true : false;
  }

  /*
  * This functions removes all info from localStorage and navigates to the login page.
  */
  logOut(): void {
    this.user = null;
    this.token = null;
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

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
          this.saveStorage( this.user._id, this.user);
        }
        swal('Cool', 'User updated successfully', 'success');
        return true;
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
