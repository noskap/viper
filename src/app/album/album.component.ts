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
		console.log('do the generate');
		let longest = '';
		let wordlist = [];
		this.count++;
		// let words = [];
		let linecount = 0;
		for (const line of this.titles) {
			let i = 0;
			// wordlist = new RegExp("[^\S]", " ")
			// console.log(wordlist);
			// while (i < this.titles.length) {
			// 	if (line !== words[i]) {
			// 		words[i] = line;
			// 	}
			// 	// console.log(i);
			// 	i++;
			//
			// }
			for (let word of line.split(' ')) {
				// console.log(word)
				wordlist.push(word)
			}
			if (line.length > longest.length) {
				longest = line;
			}
			linecount++;
		}
		console.log('Linecount', linecount);
		console.log('Loingest word');
		console.log(longest);
		console.log('word count', wordlist.length);
		// console.log(words);

		console.log('Random number', Math.ceil(Math.random() * 1000));
	}

}
