var assert = require('assert');
var Bank = require('../bank.js');
var Account = require('../account');


describe('Bank', function(){
  var bank;
  var accountOne;
  var accountTwo;
  var accountThree;

  beforeEach(function(){
    bank = new Bank();
    accountOne = new Account('Michaela Strachan', 100);
    accountTwo = new Account('Bob Harris', 200);
    accountThree = new Account('Paul Bettany', 1000);
  });

  it('should start with no accounts', function(){
    assert.equal(0, bank.numOfAccounts());
  });

  it("should be able to add an account", function(){
    bank.addAcc(accountOne)
    assert.equal(1, bank.numOfAccounts());
  });

  it("should find account by owner name", function(){
    bank.addAcc(accountOne);
    bank.addAcc(accountTwo);
    assert.equal(accountOne, bank.findByName("Michaela Strachan"));
  });

  it('should find largest account', function(){
    bank.addAcc(accountOne);
    bank.addAcc(accountTwo);
    assert.equal(accountTwo, bank.getHighestBalanceSortTest());
  });

  it("should find total account value");
});


//   it('should have an empty array of accounts', function(){
//     assert.equal(0, bank.numOfAccounts());
//   });

//   it('should be able to add an account to the Bank accounts', function(){
//     bank.addAcc(accountOne);
//     assert.equal(1, bank.numOfAccounts());
//   });
//   it('should be able to find account holder by name!', function(){
//     assert.equal(1000, bank.)
//   });
//   it('should be able to get highest balance', function(){
//     bank.addAcc(accountOne);
//     bank.addAcc(accountTwo);
//     bank.addAcc(accountThree);
//     assert.equal(1000, bank.getHighestBalance());
//   });
  // it("should ")


// })