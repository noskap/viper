import {Component, OnInit} from '@angular/core';
import {SortedTitles, Titles} from "../constants";

@Component({
	selector: 'app-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

	public title: string = "";
	public reader;
	public file;
	titles = SortedTitles;
	count = 0;

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
		//remove duplicate titles
		titles = [...new Set(titles)];

		let linecount = 0;
		for (const line of titles) {
			for (let word of line.split(' ')) {
				wordlist.push(word)
			}
			if (line.length > longest.length) {
				longest = line;
			}
			linecount++;
		}

		//remove duplicate words
		// wordlist = [...new Set(wordlist)];

		//stats
		// this.showStats(linecount, longest, wordlist)
		// const rand = Math.ceil(Math.random() * 1000);
		// console.log('Random number', rand);

		let c = 0;

		while (c < Math.floor(Math.random() * 7)) {
			let w = wordlist[Math.floor(Math.random() * 1000)];
			if (w) {
				this.title += w + ' ';
			}
		}
		console.log(this.title);
		if (!this.title) { // if generated title is nothing, do again
			this.generate();
		}

		//TODO use album title to find album cover on flickr api

	}

	showStats(linecount, longest, wordlist): void {
		console.log('Linecount', linecount);
		console.log('Loingest word');
		console.log(longest);
		console.log('word count', wordlist.length);
	}

}
