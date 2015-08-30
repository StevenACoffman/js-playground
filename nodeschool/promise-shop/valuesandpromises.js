/* jshint esnext:true, node:true, browser:false, -W079 */
'use strict';

var q = require('q');
var defer = q.defer();

function attachTitle(name) {
  return 'DR. ' + name;
}
//define chain for what should happen when the promise is resolved
defer.promise
  .then(attachTitle)
  .then(console.log);


defer.resolve('MANHATTAN');
