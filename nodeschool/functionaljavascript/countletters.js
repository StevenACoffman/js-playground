'use strict';

function countLetters(inputLetters) {
  var letterCount = {};

  inputLetters.split('').reduce(function (previousValue, element) {
    if (letterCount[element]) {
      letterCount[element] = letterCount[element] + 1;
    } else {
      letterCount[element] = 1;
    }
  }, []);
  return letterCount;
}

console.log(countLetters('all fall down'));