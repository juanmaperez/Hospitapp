import { Component, OnInit } from '@angular/core';

// function to initialize plugins which are out of Angular in this case from custom.min.js
declare function init_plugins();

@Component({
  selector: 'page-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.scss']
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
