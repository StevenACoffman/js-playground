/* jshint esnext:true, node:true */
'use strict';

var fs = require('fs');
var path = require('path');


module.exports = function listFilteredFiles(directory, extension, callback) {
	fs.readdir(directory, function (err, list) {
		if (err) {
			return callback(err); // early return
		}
		list = list.filter(function (file) {
			return path.extname(file) === '.' + extension;
		});

		callback(null, list);
	});
};