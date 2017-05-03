var assert = require('assert');
var Account = require('../account');

describe('Account', function(){
  var accountOne;

  beforeEach(function(){
    accountOne = new Account('Michaela Strachan', 100);
  });

  it('should be able to get name of Account', function(){
    assert.equal('Michaela Strachan', accountOne.name);
  });

  it('should be able to get Account balance', function(){
    assert.equal(100, accountOne.balance);
  });
})