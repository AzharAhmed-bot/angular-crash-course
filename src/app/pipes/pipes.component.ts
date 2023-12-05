import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
title:string='Angular course';
count:number=3344555566;
countFloat:number=5.45566533;
price:number=99.99;
today:Date=new Date();
simpleObj:any={
  id:1,
  name:"Azhar"
}
percent:number=0.54;
sliceArray:Array<string>=[
  "Azhar","Fahim","Hilal","Burhan"
]

}

