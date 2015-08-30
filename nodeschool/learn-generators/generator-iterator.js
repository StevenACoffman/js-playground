'use strict';

function range(to) {
  var result = 1;
  for (var i = 1; i <= to; i++) {
    result = result + i;
  }
  return result;
}

function* factorial(n) {
  for (var i = 1; i <= n; i++) {
    yield range(i);
  }
}

for (var n of factorial(5)) {
  console.log(n);
}
// 1, 2, 6, 24, 120