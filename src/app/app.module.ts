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

@NgModule({
  declarations: [
    AppComponent,

    PostComponent,
    PostListComponent,
    SwitchCaseComponent,
    NgTemplatesComponent,
   
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
