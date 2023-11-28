import { Component,OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent   {
  title:string="Post Form";
  myTitle:any;
  myDescription:any;
  url1:any;
  url2:any;
  check:boolean=false;




  @Input() fromParent:string | undefined;

  @Output() messageEvent=new EventEmitter<string>();


  
  constructor(){}

  handleBgChange(){
    this.check = !this.check;
  }
  
  handleSubmit(){
    console.log(this.myTitle)
    console.log(this.myDescription)
    console.log(this.url1)
    console.log(this.url2)
    console.log(this.check)
  }


  // sendMessage(){
  //   this.messageEvent.emit(this.outPutChildMessage)
  // }
  
  // receiveMessage($event:any){
  //   console.log($event);
  // }
}
