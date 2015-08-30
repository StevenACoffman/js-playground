/* exported filterNonUniqueFromCommaSeperateList */
var uniq = require('uniq');

module.export = function filterNonUnique(commaSeperatedList) {
  'use strict';
  console.log(uniq(commaSeperatedList.split(',')));
};