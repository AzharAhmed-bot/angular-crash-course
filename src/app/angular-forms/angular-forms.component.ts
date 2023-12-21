import { Component } from '@angular/core';
import { Form, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent {
   onSubmit(f:NgForm){
    console.log(f.value)
   }
   
  //  I wasn't allowed to use the FormControl class here but only any
   onChange(f:any){
    console.log(f);
   }
}
