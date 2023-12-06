import { Injectable } from "@angular/core";

export class PostService{
  // We can inject this into any class that needs it without neccessarily defining the instance in every class
  @Injectable({
    providedIn:"root",
  })

    myPost:Array<any>=[
        {name:"Azhar"},
        {name:"Fahim"},
        {name:"Hilal"},
        {name:"Burhan"}
    ]
  static myPost: PostService;
}