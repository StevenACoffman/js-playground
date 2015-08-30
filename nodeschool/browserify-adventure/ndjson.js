exports.parse = function (str) {
  'use strict';
  return str.split('\n').map(JSON.parse);
};
exports.stringify = function (rows) {
  'use strict';
  return rows.map(JSON.stringify).join('\n');
};