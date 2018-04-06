import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    public _userService: UserService,
    public router: Router
  ) {

  }
  canActivate() {
    if (this._userService.user.role === 'ADMIN_ROLE') {
      return true;
    } else {
      console.log('You don\'t have enough permission to access to this page');
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
