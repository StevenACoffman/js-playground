'use strict';

function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function (argument) {
    return Object.prototype.hasOwnProperty.call(argument, 'quack');
  }).length;

}

module.exports = duckCount;