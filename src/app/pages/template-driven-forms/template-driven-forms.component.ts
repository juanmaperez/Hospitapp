import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('mainForm') mainForm: NgForm;
  response: string = '';
  genders: string[] = ['male', 'female'];

  submitted: boolean= false;

  user: any = {};

  constructor() { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.user.username = this.mainForm.value.userData.username;
    this.user.email = this.mainForm.value.userData.email;
    this.user.secret = this.mainForm.value.secret;
    this.user.response = this.mainForm.value.response;
    this.user.gender = this.mainForm.value.gender;

    this.mainForm.reset();
    // console.log(this.mainForm);
  }

  autoCompleteForm() {
    this.mainForm.setValue({
      userData: {
        username: 'Pepito',
        email : 'pepito@gmail.com'
      },
      gender : 'male',
      secret: 'pet',
      response: 'My pet\'s name was Rudolf'
    });
  }

  insertName() {
    this.mainForm.form.patchValue({
      userData: {
        username: 'Manolito'
      }
    });
  }

  resetForm() {
    this.mainForm.reset();
    console.log('submitted', this.submitted);
  }

}
