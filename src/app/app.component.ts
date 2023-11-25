import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponent } from "./post/post.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-intro';
  parentMessage:string="Message changed!";
  message:string | undefined;


  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp)
  }
  ngAfterViewInit() {
    console.log(this.childComp)
    
    setTimeout(() => {
    this.message = this.childComp.childMessage;
  });
  }
}

