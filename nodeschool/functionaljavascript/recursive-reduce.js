/* jshint esnext:true, node:true */
'use strict';

//function toUpperArray(items) {
//if (!items.length) return [] // end condition
//var head = items[0] // item to operate on
//head = head.toUpperCase() // perform action
//var tail = items.slice(1) // next
//return [head].concat(toUpperArray(tail)) // recursive step
//    }

//    toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']


// Your reduce function should behave the same as a
// regular Array#reduce, but it will take the array
// to operate on as the first argument:

//    reduce([1,2,3], function(prev, curr, index, arr) {
//      return prev + curr
//    }, 0)
// => 6

function reduce(arr, func, initial) {
	if (arr.length) {
		return reduce(arr.slice(1), func, func(initial, arr[0]));
	} else {
		return initial;
	}
}

module.exports = reduce;