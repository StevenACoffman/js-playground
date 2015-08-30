/* jshint esnext:true, node:true, browser:false, -W079 */
'use strict';

var q = require('q');
var defer = q.defer();

//define callback for what should happen when the promise is resolved
defer.promise.then(console.log, console.log);

defer.resolve('I FIRED');
defer.reject('I DID NOT FIRE');
