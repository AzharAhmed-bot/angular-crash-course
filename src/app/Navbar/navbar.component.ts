import { Component } from "@angular/core";


@Component({
    selector:"app-navbar",
    template:'<h1>Navbar Template</h1>',// If you want multiple lines you can use back ticks
    styles:[`h1{
        color:red;
        font:bold
    }`] // must be in a single line for normal quotes but in back ticks you can use multiple lines
})


 export class NavbarComponent{
  

}