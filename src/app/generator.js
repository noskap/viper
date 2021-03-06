const ctitles = require('./titles');

/**
 *
 * @param removeDuplicateTitles
 * @param removeDuplicateWords
 * @param showStats
 */
const generator = (removeDuplicateTitles = true, removeDuplicateWords = false, showStats = false) => {
  let title = '';

  let longest = '';
  let wordlist = [];
  let titles = ctitles;
  if (removeDuplicateTitles) {
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

  if (removeDuplicateWords) {
    wordlist = [...new Set(wordlist)];
  }

  let count = 0;

  let amountofwords = Math.ceil(Math.random() * 7);
  if (amountofwords < 2) {
    amountofwords = 2;
  }

  while (count < amountofwords) {
    const w = wordlist[Math.floor(Math.random() * 1000)];
    if (w) {
      title += w + ' ';
    }
    count++;
  }
  console.log(title);
  console.log('Words:', amountofwords);

  if (showStats) {
    logStats(linecount, longest, wordlist);
  }

  if (!title) { // if generated title is nothing, do again
    generator(removeDuplicateTitles, removeDuplicateWords, showStats);
  }

  return title;

  // TODO use album title to find album cover on flickr api
};


const logStats = (linecount, longest, wordlist) => {
  console.log('Linecount', linecount);
  console.log('Loingest word', longest);
  console.log('word count', wordlist.length);
}

module.exports = generator;
