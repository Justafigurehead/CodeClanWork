var name = "Michaela";

var talk = function(){
  var name = "John";
  console.log("My name is " + name);
}

var walk = function(){
  console.log(name + " is walking.");
}


talk();
console.log("trying to access name " + name);
walk();