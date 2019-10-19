import {Component, OnInit} from '@angular/core';
import * as generate from '../generator';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

    public title = '';
    public count = 0;
    public removeDuplicateWords = false;
    public removeDuplicateTitles = true;

    constructor() {
    }

    ngOnInit() {

    }

    generate(): void {
        this.title = generate(this.removeDuplicateTitles, this.removeDuplicateWords, false);
    }

}
