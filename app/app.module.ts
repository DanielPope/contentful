import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routes} from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';

import { AppComponent }  from './app.component';

import {BlogsComponent} from './components/blogs/blogs.component';
import {BlogComponent} from './components/blog/blog.component'

@NgModule({
  imports: [ 
	  BrowserModule, 
	  HttpModule, 
	  JsonpModule, 
	  FormsModule,
	  RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [ 
	  AppComponent, 
	  BlogsComponent, 
	  BlogComponent,
      EscapeHtmlPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
