import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// function to initialize plugins which are out of Angular in this case from custom.min.js
declare function init_plugins();

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  login() {
    this.router.navigate(['/dashboard']);
  }

}
