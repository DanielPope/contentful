import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {contentfulService} from '../../services/contentful.service';
import {NavbarComponent} from '../navbar/navbar.component';


@Component({
    moduleId: module.id,
    selector: 'product',
    templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit{
    product: Object;
    assets:Array<Object>;
    isActive: boolean = true;
    notActive: boolean = false;
    
    constructor(
        private router:ActivatedRoute, 
        private _contentfulService:contentfulService){
        
    }
    
    ngOnInit(){
        this.router.params.subscribe((params) => {
            let entry = params['id'];
            this._contentfulService.getProduct(entry).subscribe(product => {
                this.product = product.fields;
            });  
            this._contentfulService.getProductThumbnails(entry).subscribe(res=> {
                this.assets = res.includes.Asset 
            });                    
        });
    }

    toggle1() {
        this.isActive = true;
        this.notActive = false;
    }

    toggle2() {
        this.isActive = false;
        this.notActive = true;
    }
}