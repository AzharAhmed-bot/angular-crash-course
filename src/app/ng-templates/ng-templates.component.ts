import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-templates',
  templateUrl: './ng-templates.component.html',
  styleUrls: ['./ng-templates.component.css']
})
export class NgTemplatesComponent {


  objArray:Array<any>=[
    {id:1,name:"Azhar"},
    {id:2,name:"Mohd"},
    {id:3,name:"Ali"},
    {id:4,name:"Sha"},

  ]
  receivedTitle: Array<any> =[{id:5,name:"Meeee"}]

  addNew(){
    this.objArray.push(this.receivedTitle)
  }
  onDelete(index: any){ 
    this.objArray.splice(index,1);

  }

}
