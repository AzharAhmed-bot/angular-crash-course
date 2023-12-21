import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponent } from "./post/post.component"
import { PostService } from './Services/post.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
})
export class AppComponent implements AfterViewInit {
  title = 'angular-intro';
  parentMessage:string="Message TO MY  CHILD!";
  message:string | undefined;
  receivedTitle: Array<any> =[{id:5,name:"Meeee"}]
  fromChildOutPut:string | undefined;
  imgUrl:string='https://cdn.pixabay.com/photo/2016/11/13/19/43/logo-1821863_1280.png';
  bool:boolean=true;
  userName:any;
  textValue:String="This is one way data binding"
  

  postArray:Array<string>=["Peter","John","Alex","Maxwell"]
  post:Array<any>=[];
 



  @ViewChild(PostComponent) childComp: any;

 //Undefined coz the child views have not been loaded yet.
  constructor(public postService:PostService){
    // console.log(this.childComp)

    for(let i=0; i<this.postArray.length ;i++ ){
      // console.log(this.postArray[i])
    }
    // this.post=postService.myPost

  
  }
  ngAfterViewInit() {
  //   console.log(this.childComp)
    
  //   setTimeout(() => {
  //   this.message = this.childComp.childMessage;
  // });
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
  

 
}

