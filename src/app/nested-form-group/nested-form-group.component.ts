import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent {
  form: FormGroup;

  emailPattern: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";

  constructor() {
    this.form = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      email: new FormControl('test@gmail.com', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      passwordDetails: new FormGroup({
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      }, { validators: this.passwordMatchValidator }),

      skills:new FormArray
    });
  }

  get fName() {
    return this.form.get('fName');
  }

  get lName() {
    return this.form.get('lName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('passwordDetails.password');
  }

  get confirmPassword() {
    return this.form.get('passwordDetails.confirmPassword');
  }
  get passwordDetails(){
   return this.form.get('passwordDetails')
  }

  passwordMatchValidator: ValidatorFn= (control: AbstractControl) : {[key:string] : boolean} | null=>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password===confirmPassword ? null :{'passWordMismatch': true}
  }

  onSubmit() {
      console.log(this.form.value);
   
}
}
