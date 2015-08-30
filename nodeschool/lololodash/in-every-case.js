/* jshint esnext:true, node:true, browser:false */
'use strict';

// include the Lo-Dash library
var _ = require('lodash');

var categorizeTowns = function (towns) {
  return _.forEach(towns, function (town) {
    if (town.population > 1) {
      town.size = 'big';
    } else if (town.population < 0.5) {
      town.size = 'small';
    } else {
      town.size = 'med';
    }
    return town;
  });
};

// export the worker function as a nodejs module
module.exports = categorizeTowns;
