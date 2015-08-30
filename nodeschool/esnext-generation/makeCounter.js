module.exports = function makeCounter(someObj) {
  'use strict';
  var i = 1;
  someObj.next = function () {
    var done = (i > 10);
    var value = !done ? i++ : undefined;

    return {
      done: done,
      value: value
    };
  };

};