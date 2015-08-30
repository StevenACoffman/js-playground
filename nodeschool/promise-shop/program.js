/* jshint esnext:true, node:true */
/*exported parsePromised */
var q = require('q');



function parsePromised(jsonData) {
  'use strict';
  var deferred = q.defer(),
    data;

  try {
    data = JSON.parse(jsonData);

  } catch (e) {
    deferred.reject(e);
  }
  deferred.resolve(data);
  return deferred.promise;
}

parsePromised(process.argv[2]).then(null, console.log);

//getResolvedPromise(console, 20, 300);
//getRejectedPromise(console, 20, 300);

//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here
