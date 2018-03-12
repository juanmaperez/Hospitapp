import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from './../services/user/user.service';
import { User } from '../models/user.model';


// function to initialize plugins which are out of Angular in this case from custom.min.js
declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  rememberMe: Boolean = false;

  auth2: any;

  constructor(
    public router: Router,
    public _userService: UserService
    ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.rememberMe = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '460204440360-ton01vg9aipqjt1iios8pajkq3tupic9.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      const profile = googleUser.getBasicProfile();

      const token = googleUser.getAuthResponse().id_token;
      localStorage.setItem('token', token);

      this._userService.loginGoogle(token)
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['/dashboard']);
        });
    });
  }

  login(form: NgForm ) {
    if (form.invalid) {
      return;
    }

    const user = new User (null, form.value.email, form.value.password);
    this._userService.login(user, this.rememberMe)
      .subscribe((res) => {
          this.router.navigate(['/dashboard']);
      });

  }

}
