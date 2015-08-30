/* jshint esnext:true, node:true, browser:false */
'use strict';

// include the Lo-Dash library
var _ = require('lodash');

var sortByQuantity = function (items) {
  return _.sortBy(items, function (item) {
    return -item.quantity;
  });
};

// export the worker function as a nodejs module
module.exports = sortByQuantity;
