import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent {
 stepForm:any;

  onClick(status:string){
    this.stepForm=status
  }
}
