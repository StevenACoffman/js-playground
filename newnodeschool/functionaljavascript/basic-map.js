'use strict';

function doubleAll(numbers) {
  return numbers.map(function double(number) {
    return number * 2;
  });
}

module.exports = doubleAll;