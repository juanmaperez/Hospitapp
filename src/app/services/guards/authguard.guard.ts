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
  /* This function checks if the user is logged in
  * @params:
  * @return: boolean
  */
  canActivate(): Observable<boolean> | boolean {
     if (this._userService.isLoggedIn()) {
      return true;
     } else {
      this.router.navigate(['/login']);
      return false;
     }
  }
}
