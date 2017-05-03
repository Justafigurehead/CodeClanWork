var name = 'Michaela'; //Global Scope

//Gloabl Scope out here
var myFunction = function(){
//Local scope in here.
  var name = "John";
  return name;
}

console.log(myFunction());