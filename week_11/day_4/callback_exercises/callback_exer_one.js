var somethingToCB = function(value){
  console.log("I have " + value + " cats!");
}

var functioncaller = function(cbFunction, value){
  cbFunction(value);
}

functioncaller(somethingToCB, 500);

//Some maths which aren't fun!

var incremental = function(value){
  return value + 1;
}

var square = function(value){
  return value * value;
}

var doSomeBoringMaths = function(callback, value){
  console.log(callback(value));
}

doSomeBoringMaths(square, 3);
doSomeBoringMaths(incremental, 400);