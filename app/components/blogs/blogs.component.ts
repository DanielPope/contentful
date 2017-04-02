import { Component, Pipe, PipeTransform } from '@angular/core';
import {contentfulService} from '../../services/contentful.service';

import { DomSanitizer} from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'blogs',
    templateUrl: 'blogs.component.html'
})
export class BlogsComponent { 
    blogs:{};
    assets:Array<Object>;
    
    constructor(
        private _contentfulService: contentfulService,
        private _sanitizer: DomSanitizer){
        this._contentfulService.getBlogs().subscribe(res => {                
            this.blogs = res ;
            this.assets = res.includes.Asset ;
            console.log(this.blogs);
        });    
    }
    
}