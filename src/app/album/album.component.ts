import {Component, OnInit} from '@angular/core';
import {SortedTitles, Titles} from '../constants';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

    public title = '';
    public reader;
    public file;
    public titles = SortedTitles;
    public count = 0;
    public removeDuplicateWords = false;
    public removeDuplicateTitles = true;

    constructor() {
    }

    ngOnInit() {

    }

    generate(): void {
        this.title = '';
        // console.log('do the generate');
        let longest = '';
        let wordlist = [];
        this.count++;
        let titles = this.titles;
        if (this.removeDuplicateTitles) {
            // remove duplicate titles
            titles = [...new Set(titles)];
        }

        let linecount = 0;
        for (const line of titles) {
            const linewords = line.split(' ');
            for (const word of linewords) {
                wordlist.push(word);
            }
            if (linewords.length > longest.length) {
                longest = line;
            }
            linecount++;
        }

        if (this.removeDuplicateWords) {
            // remove duplicate words
            wordlist = [...new Set(wordlist)];
        }
        // stats
        // this.showStats(linecount, longest, wordlist)
        // const rand = Math.ceil(Math.random() * 1000);
        // console.log('Random number', rand);

        let c = 0;
        const amountofwords = Math.ceil(Math.random() * 7);
        while (c < amountofwords) {
            const w = wordlist[Math.floor(Math.random() * 1000)];
            if (w) {
                this.title += w + ' ';
            }
            c++;
        }
        console.log(this.title);
        console.log('Words:', amountofwords);

        if (!this.title) { // if generated title is nothing, do again
            this.generate();
        }

        // TODO use album title to find album cover on flickr api

    }

    showStats(linecount, longest, wordlist): void {
        console.log('Linecount', linecount);
        console.log('Loingest word');
        console.log(longest);
        console.log('word count', wordlist.length);
    }

}
