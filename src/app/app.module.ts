import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// This is required for ngModel
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from  './post-list/post-list.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

import { NgTemplatesComponent } from './ng-templates/ng-templates.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { Task2Component } from './task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,

    PostComponent,
    PostListComponent,
    SwitchCaseComponent,
    NgTemplatesComponent,
    NgStyleComponent,
    NgClassComponent,
    Task2Component,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
