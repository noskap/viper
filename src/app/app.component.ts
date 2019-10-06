import {Component} from '@angular/core';
import {FunnyPics, Title} from './constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = Title;
    funnypic = FunnyPics[Math.floor(Math.random() * FunnyPics.length)];
}
