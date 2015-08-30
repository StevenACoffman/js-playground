/* jshint esnext:true, node:true */
'use strict';



//console.log(countWords(inputWords))

function countWords(inputWords) {
	var wordCount = [];
	inputWords.reduce(function (element) {
		wordCount[element] = ++wordCount[element] || 1;
	});

}


module.exports = countWords;