import { Component, OnInit } from '@angular/core';

import { SidebarService } from './../../services/services.index';

import { UserService } from './../../services/services.index';
import { User } from '../../models/user.model';

@Component({
  selector: 'main-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  user: User;

  constructor(
    public _sidebarService: SidebarService,
    public _userService: UserService
  ) { }

  ngOnInit() {
    this.user = this._userService.user;
    this._sidebarService.loadMenu();
  }

}
