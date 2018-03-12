import { SidebarService } from './../../services/services.index';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/services.index';

@Component({
  selector: 'main-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(
    public _sidebar: SidebarService,
    public _userService: UserService
  ) { }

  ngOnInit() {
  }

}
