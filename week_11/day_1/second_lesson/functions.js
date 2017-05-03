//Function declaration! 

function hello(){
  return "Hello everyone ^_^";
}

//
console.log(hello()); // invokation.


function mood(name, mood, weather){
  return name + ", you are " + mood + ". Just like the weather, which is " + weather;
}

console.log(mood("John","happy", "rainy"));

function add(){
  var i;
  var total = 0;
  for( i = 0; i < arguments.length;i++){
    total += arguments[i];

  }
  return total;
}

// console.log(add(1,2,3,4, "cat"));


var helloYou = function(){
  console.log("hello world!");
}

console.log(helloYou);

helloYou();

var moody = function (name, mood, weather){
  console.log(name + ", you are " + mood + ". Just like the weather, which is " + weather);
}

moody("Michaela", "Sunny", "sunny");

var add = function(a,b){
  return a + b;
}

var log = function(functionToInvoke,a,b){
  console.log(functionToInvoke(a,b));
}

log(add,1,6);