import { Component,OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:string="List of Posts";
  messagePost:string="Hello from my Post";
  message:string="Saying hello to my child postList component";

  @Input() fromParent:string | undefined;

  
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
