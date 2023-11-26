import { Component,OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent   {
  title:string="List of Posts";
  messagePost:string="Hello from my Post";
  message:string="Saying hello to my child postList component";
  childMessage:string="Am saying hi to my parent";
  outPutChildMessage:string="Am trying to use the output and event emittor";


  @Input() fromParent:string | undefined;

  @Output() messageEvent=new EventEmitter<string>();


  
  constructor(){}


  sendMessage(){
    this.messageEvent.emit(this.outPutChildMessage)
  }
  
  receiveMessage($event:any){
    console.log($event);
  }
}
