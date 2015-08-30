'use strict';

function repeat(operation, num) {
  while (num--) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat