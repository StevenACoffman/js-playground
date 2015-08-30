/* jshint esnext:true, node:true */
'use strict';
//var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

//console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }


function countWords(inputWords) {
	return inputWords.reduce(function (wordCount, currentValue) {
		wordCount[currentValue] = ++wordCount[currentValue] || 1;
		return wordCount;
	}, {});

}


module.exports = countWords;