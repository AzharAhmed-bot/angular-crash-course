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
  fromChildOutPut:string | undefined;
  imgUrl:string='https://cdn.pixabay.com/photo/2016/11/13/19/43/logo-1821863_1280.png';
  bool:boolean=true;




  @ViewChild(PostComponent) childComp: any;

 //Undefined coz the child views have not been loaded yet.
  constructor(){
    console.log(this.childComp)
  }
  ngAfterViewInit() {
    console.log(this.childComp)
    
    setTimeout(() => {
    this.message = this.childComp.childMessage;
  });
  }

  receiveMessage($event: any){
    this.fromChildOutPut=$event;
     console.log($event)
  }
  buttonClick(){
    this.bool=!this.bool;
  }
  onKeyup(userName:any){
   console.log(userName)
  }

}

