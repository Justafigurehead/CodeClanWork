var timein = function(){console.log("Outside timeout")};


setTimeout(function(){
  console.log("feck");
  timein();
}, 2 * 1000);

