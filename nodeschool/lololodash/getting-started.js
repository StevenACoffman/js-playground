/* jshint esnext:true, node:true, browser:false */
'use strict';

// include the Lo-Dash library
var _ = require('lodash');

var filterwhere = function (item) {
  return _.where(item, {
    active: true
  });
};
// export the worker function as a nodejs module
module.exports = filterwhere;
