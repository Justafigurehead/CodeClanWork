function hello(name,age){
  console.log("Hello I'm " + name + " and I'm " + age + " years old.");
}


//working with basic variables.

var myString = "Ally";
var age = 38;

hello(myString, age);

// working with math

var a = 1;
var b = 2;
var c = 2.5;

var d = c * c;

console.log(Math.floor(d - c));


//Working with string generic methods.

var myString = "a nice string we have created.";

console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.repeat(b));

// Working with null

var height = null;
console.log(height);

// find type of.

var jam = true;
jam = "strawberry";
 console.log(typeof(jam));

console.log("Route " + 6 + 6);
console.log(6 + 6 + " Route");

//Boolean

var myTrue = Boolean(jam);

// console.log(myTrue == "raspberry");

// console.log(8 == 010); //watch out for what the user can type in and if it will be valid.

// console.log(true === "true");

// console.log(8 !== "8"); // checks the type and the value. A bit like an 'and' function so check this AND the type

console.log((1 + 1 === 2) || ( 1+1 === 4));

//

if (parseInt("cat")) console.log("true");
console.log(parseInt("cat") + " cat")