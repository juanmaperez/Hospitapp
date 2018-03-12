import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert2';
import { User } from '../models/user.model';

import { UserService } from './../services/services.index';
import { Router } from '@angular/router';


// function to initialize plugins which are out of Angular in this case from custom.min.js
declare function init_plugins();

@Component({
  selector: 'page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.css']
})

export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
      name : new FormControl( null, Validators.required),
      email : new FormControl( null, [Validators.required, Validators.email]),
      password : new FormControl(null, Validators.required),
      password2 : new FormControl(null, Validators.required),
      conditions: new FormControl(false),
    }, {
      validators: this.samePassword('password', 'password2'),
    });
  }

  samePassword(password1: string, password2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[password1].value;
      const pass2 = group.controls[password2].value;

      if (pass1 === pass2) {
        return null;
      } else {
        return {
          samePassword: true
        };
      }
    };
  }


  register() {

    if ( this.form.invalid ) {
      return;
    }
    if (!this.form.value.conditions) {
      swal('Hey', 'You must accept conditions', 'warning');
      return;
    }

    const user = new User(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password,
    );

    this._userService.createUser(user)
      .subscribe(res => {
        this.router.navigate(['/login']);
      });

  }

}
