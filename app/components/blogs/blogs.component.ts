import { Component, Pipe, PipeTransform } from '@angular/core';
import {contentfulService} from '../../services/contentful.service';
import { Location } from "@angular/common";
import { DomSanitizer} from '@angular/platform-browser';
import { ImageMatchPipe } from '../../pipes/match-id.pipe';

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
            this.blogs = res.items ;
            this.assets = res.includes.Asset ;
            console.log(this.blogs);
        });    
    }
    
}