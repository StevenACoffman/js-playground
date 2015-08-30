'use strict';
//Math.pow(base, exponent)

function bindFirstArg(func, a) {
  return function (b) {
    return func(a, b);
  };
}



var powersOfTwo = bindFirstArg(Math.pow, 2);

console.log(powersOfTwo(3)); // 8
console.log(powersOfTwo(5)); // 32