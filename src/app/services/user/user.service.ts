import { URL_SERVER } from './../../config/config';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

import swal from 'sweetalert2';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  user: User;
  token: string;

  basicUrl = URL_SERVER;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  createUser(user: User) {
    const url = `${this.basicUrl}/users`;
    return this.http.post(url, user)
                .map((res: any) => {
                  swal('Great', 'User created successfully', 'success');
                  return res.user;
                });
  }

  login(user: User, rememberMe: Boolean = false) {

    if (rememberMe) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = `${this.basicUrl}/login`;
    return this.http.post(url, user)
      .map((res: any) => {
        this.user = res.user;
        this.saveStorage( res.id, this.user, res.token);
      });
  }

  loginGoogle(token) {
    const url = `${URL_SERVER}/login/google`;

    return this.http.post(url, {})
    .map((res: any) => {
      this.user = res.user;
      this.saveStorage( res.id, this.user, res.token);
      return true;
    });
  }

  saveStorage( id: string, user: User, token?: string) {
    localStorage.setItem('id', id);
    localStorage.setItem('user', JSON.stringify(user));
    if (token) {
    localStorage.setItem('token', token);
    }

    this.user = user;
    this.token = token;
  }

  isLoggedIn() {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));

    return (!!this.token) ? true : false;
  }

  logOut() {
    this.user = null;
    this.token = null;
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }

  updateUser(user: User) {
    const url = `${URL_SERVER}/users/${user._id}`;

    return this.http.put(url, user)
      .map((res: any) => {
      this.user = res.user;
      this.saveStorage( this.user._id, this.user);
        swal('Cool', 'User updated successfully', 'success');
      });
  }

}
