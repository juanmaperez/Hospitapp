import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/services.index';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor( public _userService: UserService) { }

  ngOnInit() {
    this.user = this._userService.user;
    console.log(this.user);
  }

}
