/*global describe:false, it:false*/
'use strict';

var url = require('./hiker.js');

//----------------------------------------------------
// This test has nothing to do with the chosen exercise.
// It's only to help you get started.
//----------------------------------------------------

describe('URL RemoveParameter:', function () {
  it('deleting parameter works', function () {
    url.removeParameter('http://www.mysite.com/amadeus?enrollmentId=34', 'enrollmentId').should.equal(
      'http://www.mysite.com/amadeus?');
  });
  it('deleting nonexistent parameter works', function () {
    url.removeParameter('http://www.mysite.com/amadeus', 'enrollmentId').should.equal(
      'http://www.mysite.com/amadeus');
  });
  it('deleting parameter leaves other parameter', function () {
    url.removeParameter('http://www.mysite.com/amadeus?enrollmentId=34&somethingelse=3', 'enrollmentId').should
      .equal(
        'http://www.mysite.com/amadeus?somethingelse=3');
  });
});