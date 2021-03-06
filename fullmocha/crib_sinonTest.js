/*global describe:false, it:false, beforeEach:false, sinon:false, assert:true, expect:true*/
'use strict';

//----------------------------------------------------
// This is a TEXT file giving examples of sinon tests.
//----------------------------------------------------

//hello would normally be defined in your module
function hello(name, cb) {
  cb('hello ' + name);
}

describe('hello with callback', function () {
  var cb;

  //arrange and act here
  beforeEach(function () {
    cb = sinon.spy();
    hello('foo', cb);
  });

  it('assert call callback with correct greeting with ' +
    'sinon + chai assert',
    function () {
      assert(cb.calledWith('hello foo'));
    });

  it('should call callback with correct greeting with ' +
    'sinon + chai expect',
    function () {
      expect(cb.calledWith('hello foo')).to.be.ok;
    });

  it('should call callback with correct greeting with ' +
    'sinon + chai should',
    function () {
      cb.calledWith('hello foo').should.be.ok;
    });

  it('expect call callback with correct greeting with ' +
    'chai expect + sinon + sinon-chai',
    function () {
      expect(cb).to.have.been.calledWith('hello foo');
    });

  it('should call callback with correct greeting with ' +
    'chai should + sinon + sinon-chai',
    function () {
      cb.should.have.been.calledWith('hello foo');
    });
});
