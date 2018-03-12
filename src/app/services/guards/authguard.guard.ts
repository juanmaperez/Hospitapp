import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './../user/user.service';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public _userService: UserService,
    public router: Router
  ) {

  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
     if (this._userService.isLoggedIn()) {
      console.log('we passed by');
      return true;
     } else {
      this.router.navigate(['/login']);
      return false;
     }
  }
}
