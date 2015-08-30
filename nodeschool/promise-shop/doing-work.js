/* jshint esnext:true, node:true, browser:false, -W079 */
'use strict';

var
  qhttp = require('q-io/http'),
  _ = require('lodash');


var readFromServer = function (port, argument) {
  return qhttp.read(this.serverURL + ':' + port + '/' + argument);
};

readFromServer = _.bind(readFromServer, {
  'serverURL': 'http://localhost'
});



readFromServer('7000', '')
  .then(function (id) {
    return readFromServer('7001', id);
  })
  .then(function (json) {
    console.log(JSON.parse(json));
  })
  .then(null, console.error)
  .done();