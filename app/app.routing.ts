import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {HomeComponent} from './components/home/home.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {BlogComponent} from './components/blog/blog.component';
import {ShopComponent} from './components/shop/shop.component';
import {ProductComponent} from './components/product/product.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'blog',
        component: BlogsComponent
    },	 	   
    {
        path:'blog/post/:id',
        component: BlogComponent
    },
    {
        path:'shop',
        component: ShopComponent
    },
    {
        path:'shop/product/:id',
        component: ProductComponent
    }        
];