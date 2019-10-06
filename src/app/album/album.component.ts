import {Component, OnInit} from '@angular/core';
import {Titles} from "../constants";

@Component({
	selector: 'app-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

	public title: string = "";
	public reader;
	public file;
	titles = Titles;

	constructor() {
	}

	ngOnInit() {

	}

	generate(): void {
		/*
			import random
			import re

			def main():
			words = []
			longest = 0
			with open("temp.txt") as f:
			for line in f:
			word_list = re.sub("[^\S]", " ", line[:line.index('[')]).split()
			i = 0
			while i < len(word_list):
			if i not in words:
			words.append([])
			if word_list[i] not in words[i]:
			words[i].append(word_list[i])
			i += 1
			if(i > longest):
			longest = i


			length = random.randint(1, longest)
			count = 0
			to_return = ""
			while count < length:
			rando = random.randint(0, len(words[count]) - 1)
			to_return += str(words[count][rando])
			to_return += " "
			count += 1
			print to_return

			if __name__ == '__main__':
			main()
		*/
	}

}
