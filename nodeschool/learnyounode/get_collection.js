/* jshint esnext:true, node:true */
'use strict';

var http = require('http'),
	concatStream = require('concat-stream'),
	results = [],
	count = 0;

function printResults() {
	for (var i = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet(index) {

	http.get(process.argv[2 + index], function (response) {
		response.pipe(concatStream(function (data) {
			results[index] = data.toString();
			count++;
			if (count == 3) {
				//yay! Last one!
				printResults();
			}


		}));

	});
}


for (var i = 0; i < 3; i++)
	httpGet(i)