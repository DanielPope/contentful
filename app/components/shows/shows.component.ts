import { Component, Pipe, PipeTransform } from '@angular/core';
import {contentfulService} from '../../services/contentful.service';
import { Location } from "@angular/common";
import { DomSanitizer} from '@angular/platform-browser';


@Component({
    moduleId: module.id,
    selector: 'shows',
    templateUrl: 'shows.component.html'
})
export class ShowsComponent { 
    shows:{};
    
    constructor(
        private _contentfulService: contentfulService,
        private _sanitizer: DomSanitizer){
        this._contentfulService.getShows().subscribe(res => {                
            this.shows = res.items;
            console.log(this.shows);
        });    
    }
    
}