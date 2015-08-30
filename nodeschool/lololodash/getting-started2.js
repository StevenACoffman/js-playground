/* jshint esnext:true, node:true, browser:false */
'use strict';

// include the Lo-Dash library
var _ = require('lodash');

var getActive = function (users) {
  return _.where(users, {
    'active': true
  });
};

// export the worker function as a nodejs module
module.exports = getActive;
