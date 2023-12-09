import { Component } from '@angular/core';
import { PostService } from '../Services/post.services';
@Component({
  selector: 'app-service-implementation',
  templateUrl: './service-implementation.component.html',
  styleUrls: ['./service-implementation.component.css'],
  // Providers are used to inject dependencies into a component, 
  // Its basically telling this component that PostService is injectable
  // we are telling the component to create an instance only for the PostService component
  // Its better to use if you have only 1 or 2 components but not good practice for many components

})
export class ServiceImplementationComponent {
post:Array<any>=[];

  constructor(private postService:PostService){
    // this.post=postService.myPost;

  }
}
