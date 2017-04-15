import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogsComponent} from './components/blogs/blogs.component';
import {BlogComponent} from './components/blog/blog.component';

import {ShopComponent} from './components/shop/shop.component';
import {ProductComponent} from './components/product/product.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'blogs',
      pathMatch: 'full'
    },
    {
        path:'blogs',
        component: BlogsComponent
    },	 	   
    {
        path:'blogs/post/:id',
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