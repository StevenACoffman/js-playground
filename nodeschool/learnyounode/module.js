/* jshint esnext:true, node:true */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function listFilteredFiles(directory, extension, callback) {
	fs.readdir(directory, function (err, list) {
		list.forEach(function (file) {
			if (path.extname(file) === '.' + extension) {
				callback(file);
			}
		});
	});
};