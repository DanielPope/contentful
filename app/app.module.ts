import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routes} from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { ImageMatchPipe } from './pipes/match-id.pipe';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {HomeComponent} from './components/home/home.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {BlogComponent} from './components/blog/blog.component'
import {ShopComponent} from './components/shop/shop.component';
import {ProductComponent} from './components/product/product.component';
import {ShowsComponent} from './components/shows/shows.component';

@NgModule({
  imports: [ 
	  BrowserModule, 
	  HttpModule, 
	  JsonpModule, 
	  FormsModule,
	  RouterModule.forRoot(routes, { useHash: false })
  ],
  declarations: [ 
	  AppComponent, 
	  HomeComponent,
	  BlogsComponent, 
	  BlogComponent,
	  ShopComponent,
	  ProductComponent,
	  ShowsComponent,
	  NavbarComponent,
	  ImageMatchPipe,
      EscapeHtmlPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
