import { Component,OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent   {
  helloWorld:string="Hello World";

 @Input() fromPost:string | undefined;

 @Output() helloMessage=new EventEmitter<string>();

 

 onHello(){
    this.helloMessage.emit(this.helloWorld);
  }

}
