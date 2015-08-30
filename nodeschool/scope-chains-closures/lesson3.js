function foo() {
  'use strict';
  quux = 'something else';

  function zip() {
    var quux = 'something';
  }
  var bar = 'hello';
}