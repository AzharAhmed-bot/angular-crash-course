import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  name:string="";
  email:string="";
  address:string="Address";
  data: Array<any> = [];


  onClick(){
    

    this.data.push({name:this.name,email:this.email, address:this.address})
    console.log(this.data)
    this.name='';
    this.email='';
    
  }
  onDelete(index:number){
    console.log(`Clicked index ${index}`)
    this.data.splice(index,1);
    console.log(this.data);
  }


}
