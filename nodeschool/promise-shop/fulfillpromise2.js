/* jshint esnext:true, node:true, browser:false, -W079 */
'use strict';

var q = require('q');
var defer = q.defer();

//define callback for what should happen when the promise is resolved
defer.promise.then(console.log);

//delay resolving the promise for 300 ms, then pass 'RESOLVED!' as a parameter
//setTimeout(defer.resolve, 300, 'RESOLVED!');
defer.resolve('RESOLVED!');
