import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from '../../config/config';

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
        this.saveStorage( res.id, res.token, res.user);

      });
  }

  loginGoogle(token) {
    const url = `${URL_SERVER}/login/google`;

    return this.http.post(url, {})
    .map((res: any) => {
      this.saveStorage( res.id, res.token, res.user);
      return true;
    });
  }

  saveStorage( id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  isLoggedIn() {
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

}
