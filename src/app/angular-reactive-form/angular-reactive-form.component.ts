import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrls: ['./angular-reactive-form.component.css']
})
export class AngularReactiveFormComponent {
 form:any;

 constructor(){
  this.form=new FormGroup({
    // If you need to separate them using - ensure u use quotes i.e "full-name" 
    fullName:new FormControl('', [
      Validators.required,
      Validators.minLength(5)

    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
    ]),
    address:new FormControl()
  })
 }
  // You can also use this approach instead of defining it in the html 
 get fullName(){
   return this.form.get("fullName")
 }
 get email(){
  return this.form.get("email")
 }
 get address(){
  return this.form.get("address")
 }

 onSubmit(){
  console.log(this.form.value)
 }
}
