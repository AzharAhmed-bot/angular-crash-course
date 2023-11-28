import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponent } from "./post/post.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-intro';
  parentMessage:string="Message TO MY  CHILD!";
  message:string | undefined;
  receivedTitle: string | undefined;
  fromChildOutPut:string | undefined;
  imgUrl:string='https://cdn.pixabay.com/photo/2016/11/13/19/43/logo-1821863_1280.png';
  bool:boolean=true;
  userName:any;
  textValue:String="This is one way data binding"

  postArray:Array<string>=["Peter","John","Alex","Maxwell"]
  objArray:Array<any>=[
    {id:1,name:"Azhar"},
    {id:2,name:"Mohd"},
    {id:3,name:"Ali"},
    {id:4,name:"Sha"},

  ]




  @ViewChild(PostComponent) childComp: any;

 //Undefined coz the child views have not been loaded yet.
  constructor(){
    console.log(this.childComp)

    for(let i=0; i<this.postArray.length ;i++ ){
      console.log(this.postArray[i])
    }
  
  }
  ngAfterViewInit() {
    console.log(this.childComp)
    
    setTimeout(() => {
    this.message = this.childComp.childMessage;
  });
  }

  receiveMessage($event: any){
    this.receivedTitle = $event;
    console.log(this.receivedTitle);
  }
  buttonClick(){
    this.bool=!this.bool;
  }

  
  onKeyup(){
    console.log(this.userName);
  }
  onClick(){
    console.log(this.textValue)
  }
  addNew(){
    this.objArray.push(this.receivedTitle)
  }
  onDelete(index: any){
    this.objArray.splice(index,1);

  }

 
}

