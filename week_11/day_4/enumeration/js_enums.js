// var array = [1,2,3,4,5];

// var ourForEach = function(array, callback){
//   for (var item of array){
//     callback(item);
//   }
// }

// ourForEach(array, function(item){
//   console.log('there are', item, 'cats');
// })


var Bank = function(){
  this.accounts = [100, 200, 300, 400, 500];
  this.total = 0;
};

Bank.prototype = {
  setTotal: function(){
    this.total = 0;
    this.accounts.forEach(function(account){
        this.total += account;
    }.bind(this));
  }

}

var bank = new Bank();

console.log("bank total", bank.total);
bank.setTotal();
console.log("total after:", bank.total);