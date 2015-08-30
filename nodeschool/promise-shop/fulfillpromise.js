/* jshint node:true, browser:false, -W079 */
'use strict';

var Promise = require('bluebird');

function synchronousPromise() {
  Promise.resolve(console.log('hello'))
    .then(console.log('how are you'))
    .then(console.log('goodbye'))
    .catch(console.log('error'));
}
synchronousPromise();
synchronousPromise();

var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;


  var p1 = new Promise( /* We make a new promise: we promise the string 'result' (after waiting 3s) */
    function (resolve, reject) { /* The resolver function is called with the ability to resolve or reject the promise */
      console.log('(beforeend', thisPromiseCount + ') Promise started (Async code started)');
      setTimeout( /* This only is an example to create asynchronism */
        function () {
          resolve(thisPromiseCount); /* We fulfill the promise ! */
        }, Math.random() * 2000 + 1000);
    });

  p1.then( /* We define what to do when the promise is fulfilled */
    function (val) { /* Just log the message and a value */
      console.log('(beforeend', val + ') Promise fulfilled (Async code terminated)');
    }).
  catch(function (error) {
    console.log(error);
  });

  console.log('(beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');

}

testPromise();
testPromise();
testPromise();
