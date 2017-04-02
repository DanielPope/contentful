import { Component } from '@angular/core';
import {contentfulService} from './services/contentful.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [contentfulService]
})
export class AppComponent { }
