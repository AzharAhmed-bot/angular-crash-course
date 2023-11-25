import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:String="List of Posts";
  
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
