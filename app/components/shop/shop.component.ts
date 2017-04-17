import { Component, Pipe, PipeTransform } from '@angular/core';
import {contentfulService} from '../../services/contentful.service';
import { Location } from "@angular/common";
import { DomSanitizer} from '@angular/platform-browser';
import { ImageMatchPipe } from '../../pipes/match-id.pipe';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
    moduleId: module.id,
    selector: 'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent { 
    products:{};
    assets:Array<Object>;
    
    constructor(
        private _contentfulService: contentfulService,
        private _sanitizer: DomSanitizer){
        this._contentfulService.getProducts().subscribe(res => {                
            this.products = res.items ;       
            this.assets = res.includes.Asset ;
            console.log(this.products);
            console.log(this.assets);
        });    
    }
    
}