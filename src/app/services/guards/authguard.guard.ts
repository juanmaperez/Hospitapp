import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import { UserService } from './../user/user.service';



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
    const payload = JSON.parse(atob(token.split('.')[1]));

     if (this._userService.isLoggedIn() && !this.tokenExpired(payload.exp)) {
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

  tokenExpired(expiresIn: number) {
    const dateTime = new Date().getTime() / 1000;
    if (expiresIn < dateTime) {
        return true;
    }
    return false;
}


}
