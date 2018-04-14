import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import { UserService } from './../user/user.service';

import { JwtHelperService } from '@auth0/angular-jwt';
const jwtHelper = new JwtHelperService();

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(
    public _userService: UserService,
    public router: Router,
  ) {

  }
  /* This function checks if the user is logged in
  * @params:
  * @return: boolean
  */
  canActivateChild(): Observable<boolean> | boolean {
    const token = localStorage.getItem('token');

     if (this._userService.isLoggedIn() && !jwtHelper.isTokenExpired(token)) {
      this._userService.updateToken()
        .subscribe((res) => {
          return res;
        });
      return true;
     } else {
      this.router.navigate(['/login']);
      return false;
     }
  }

}
