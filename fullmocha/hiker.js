/* exported answer*/
//----------------------------------------------------
// This code has nothing to do with the chosen exercise.
// It's only to help you get started.
//----------------------------------------------------
function doesNotStartWith(sourceString, searchString) {
  'use strict';
  return (sourceString.lastIndexOf(searchString, 0) === -1);
}
exports.removeParameter = function removeParameter(url, parameter) {
  'use strict';
  var urlparts = url.split('?');

  if (urlparts.length >= 2) {
    var urlBase = urlparts.shift(); //get first part, and remove from array
    var queryString = urlparts.join('?'); //join it back up

    var prefix = encodeURIComponent(parameter) + '=';
    var parameters = queryString.split(/[&;]/g);
    parameters = parameters.reduce(function (previousValue, currentValue) {
      if (doesNotStartWith(currentValue, prefix)) {
        previousValue.push(currentValue);
      }
      return previousValue;
    }, []);

    url = urlBase + '?' + parameters.join('&');
  }
  return url;
};