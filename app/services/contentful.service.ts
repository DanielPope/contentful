import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class contentfulService{
    token: string;
    space: string;
    blog: string;

    
    constructor(private _http:Http , private  _jsonp:Jsonp){
        this.space = '5t2diyyfjpv1';
        this.token = '8b41ffa5f5aa4576d894fb46423d475213c3b9bd3fbaa63ef44a0f7283cba147';
        this.blog = '14l94LTcTksosm4k6uoUeA';       
        console.log('MovieService Initialized...');
    }

    getBlogs(){
        return this._http.get('https://cdn.contentful.com/spaces/'+this.space+'/entries?access_token='+this.token+'&content_type='+this.blog+'&include=10')
            .map(res => res.json());    
    } 

    getBlog(entry:string){
        return this._http.get('https://cdn.contentful.com/spaces/'+this.space+'/entries/'+entry+'?access_token='+this.token)
            .map(res => res.json());    
    }


}


