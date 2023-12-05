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
dummyText:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac neque vel sapien bibendum tempus. Integer euismod justo vel enim ullamcorper, at eleifend nisi suscipit. Duis tincidunt euismod purus, non efficitur nisi fringilla nec. Nulla facilisi. Curabitur id urna in justo ultricies tincidunt a at ligula. Proin scelerisque, libero nec fringilla consequat, massa tortor laoreet odio, vel posuere justo lacus a libero. Vestibulum facilisis, libero nec cursus iaculis, nisl dui varius arcu, nec viverra mi ligula ac tortor. Ut consectetur eleifend purus, sit amet euismod elit tempus vel. Vivamus interdum scelerisque ex, in ultrices quam venenatis non. Integer tincidunt risus sit amet justo malesuada, in bibendum elit ullamcorper. Nunc vel nunc et lacus hendrerit fermentum. Sed ut ex eu odio fermentum cursus. Nulla facilisi. Vivamus quis risus at arcu efficitur venenatis. Sed id nisl vel purus euismod blandit nec ac orci."

}

