import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogsComponent} from './components/blogs/blogs.component';
import {BlogComponent} from './components/blog/blog.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/posts',
      pathMatch: 'full'
    },
    {
        path:'posts',
        component: BlogsComponent
    },	 	   
    {
        path:'blog/:id',
        component: BlogComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);