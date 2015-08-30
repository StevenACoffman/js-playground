/* jshint esnext:true, node:true, browser:false, -W079 */
'use strict';

var qhttp = require('q-io/http');
qhttp.read('http://localhost:1337')
  .then(JSON.parse)
  .then(console.log)
  .then(null, console.error)
  .done();
