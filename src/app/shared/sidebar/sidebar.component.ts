import { SidebarService } from './../../services/services.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
