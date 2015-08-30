/* jshint esnext:true, node:true */
/*exported parsePromised */
var q = require('q');


var firstPromise = q.defer(),
  secondPromise = q.defer();



//all(firstPromise.promise, secondPromise.promise)
Promise.all([firstPromise.promise, secondPromise.promise])
  .then(console.log)
  .done();


setTimeout(function () {
    'use strict';
    secondPromise.resolve('FTW');
    firstPromise.resolve('PROMISES');

  },
  200);
//parsePromised(process.argv[2]).catch(console.log);

//getResolvedPromise(console, 20, 300);
//getRejectedPromise(console, 20, 300);

//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here
