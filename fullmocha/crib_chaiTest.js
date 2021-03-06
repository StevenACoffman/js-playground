/*global describe:false, it:false*/
'use strict';

//----------------------------------------------------
// This is a TEXT file giving examples of chai tests.
//----------------------------------------------------

var the = require('./hiker.js');

describe('Assert Style: Answer', function () {
  it('to life the universe and everything', function () {
    assert.equal(the.answer(), 42);
  });
});

describe('Expect Style: Answer', function () {
  it('to life the universe and everything', function () {
    expect(the.answer()).to.equal(42);
  });
});

describe('Should Style: Answer', function () {
  it('to life the universe and everything', function () {
    the.answer().should.equal(42);
  });
});
