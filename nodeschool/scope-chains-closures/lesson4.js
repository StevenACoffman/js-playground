function foo() {
  'use strict';
  quux = 'something else';
  var bar = 'hello';

  function zip() {
    var quux = 'something';
    bar = true;
  }
  return zip;
}