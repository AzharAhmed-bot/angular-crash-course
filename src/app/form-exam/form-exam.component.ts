import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-exam',
  templateUrl: './form-exam.component.html',
  styleUrl: './form-exam.component.css'
})
export class FormExamComponent {
  form:any;
 constructor(){
   this.form=new FormGroup({
     fullName:new FormControl('',[
      Validators.required
     ]),
     email:new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
    ]),
    phoneNumber:new FormControl('',[
     Validators.required
    ]),
    resume:new FormControl('',[
     Validators.required
    ])
   })
 }

 onSubmit(){
   console.log(this.form)
 }

 get fullName(){
  return this.form.get("fullName")
 }
 get email(){
  return this.form.get("email")
 }
 get phoneNumber(){
  return this.form.get("phoneNumber")
 }
 get resume(){
  return this.form.get("resume")
 }


 
}
