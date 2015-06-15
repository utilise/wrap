var expect = require('chai').expect
  , wrap = require('./')

describe('wrap', function() {
  it('should wrap value in function', function() {
    expect(wrap('foo')()).to.be.equal('foo')
  })
})