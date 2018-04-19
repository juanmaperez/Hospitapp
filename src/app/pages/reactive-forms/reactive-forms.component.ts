import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  
  genders = ['male', 'female'];
  mainForm: FormGroup;
  forbiddenEmail = 'test@test.com';
  forbiddenUserNames: string[] = ['juanma', 'fede'];

  submitted = false;

  constructor() { }

  ngOnInit() {
    this.initilizeForm();

    this.mainForm.statusChanges.subscribe(status => console.log('Main status of the Form', status));
    this.mainForm.valueChanges.subscribe(value => console.log('All values in the Form', value));

  }

  initilizeForm() {
    this.mainForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.checkForbiddenEmail.bind(this)),
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    // We need to tell to typeScript that is a FormArray
    (<FormArray>this.mainForm.get('hobbies')).push(control);
  }

  // Custom Validator
  checkForbiddenNames(control: FormControl) {
    if (control.value !== null) {
      if (this.forbiddenUserNames.indexOf(control.value.toLowerCase()) !== -1) {
        return {'userNameForbidden' : true };
      }
    }
      return null;
  }

  // Custom Async Validator
  checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        // we are using [this] then we will have to bind the scope to this function
        if (control.value === this.forbiddenEmail) {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;

  }

  autoCompleteForm() {
    this.mainForm.setValue({
      userData: {
        username: 'Pepito',
        email : 'pepito@gmail.com'
      },
      gender : 'male',
      hobbies: [],
    });
  }

  insertName() {
    this.mainForm.patchValue({
      userData: {
        username: 'Manolito'
      }
    });
  }

  resetForm() {
    this.mainForm.reset();
    console.log('submitted', this.submitted);
  }



  onSubmit() {
    this.submitted = true;
    console.log('submitted', this.submitted);
    console.log(this.mainForm);
  }

}
