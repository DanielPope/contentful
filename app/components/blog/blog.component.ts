import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {contentfulService} from '../../services/contentful.service';

@Component({
    moduleId: module.id,
    selector: 'blog',
    templateUrl: 'blog.component.html'
})
export class BlogComponent implements OnInit{
    post: Object;
    
    constructor(
        private router:ActivatedRoute, 
        private _contentfulService:contentfulService){
        
    }
    
    ngOnInit(){
        this.router.params.subscribe((params) => {
            let entry = params['id'];
            this._contentfulService.getBlog(entry).subscribe(post => {
                this.post = post.fields;
                console.log(this.post);
            });
        });
    }
}