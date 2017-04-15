import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogsComponent} from './components/blogs/blogs.component';
import {BlogComponent} from './components/blog/blog.component';

export const routes: Routes = [
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
        path:'posts/:id',
        component: BlogComponent
    }
];