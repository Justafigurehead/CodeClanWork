var Bank = function(){
  this.accounts = [];
};

Bank.prototype = {

   numOfAccounts: function(){
    return this.accounts.length;
   }, 

   addAcc: function(account){
    this.accounts.push(account);
   },

   findByName: function(name){
    return this.accounts.find(function(account){
      return account.name === name;
     })
    },

   getHighestBalanceSortTest: function(){
    return this.accounts.sort(function(a,b){
      return a.balance < b.balance;
    })[0];
   },

   getAccOfHighestBal: function(){
     var largest = this.accounts[0];
     this.accounts.forEach(function(account){
       if (account.balance >= largest.balance){
         largest = account;
       };
     });
     return largest;
   }
}

module.exports = Bank;