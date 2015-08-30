/* jshint esnext:true, node:true */
'use strict';

function duckCount() {

  //console.log('Arguments:' + arguments);
  if (arguments) {
    var numberOfThings = arguments.length,
      numberOfDucks = Array.prototype.slice.call(arguments, 0)
      .map(function (currentValue) {
        return Object.prototype.hasOwnProperty.call(currentValue, 'quack') ? 1 : 0;
      })
      .reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      });

    //console.log('Matched ' + numberOfDucks + ' of ' + numberOfDucks + ' valid objects from ' + numberOfThings + ' total.');
  }
  return numberOfDucks;
}

module.exports = duckCount;