/*global prompt:false */
'use strict';
var filterNonUnique = require('./uniquely.js');
var returnedValue = prompt();

filterNonUnique(returnedValue);