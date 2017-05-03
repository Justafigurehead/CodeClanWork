//initialize with values

var fruit = ["pear", "banana", "apples"];
console.log("Fruits", fruit);


//initialize with no values

var vegetables = [];
var junk = new Array();

console.log(vegetables);
console.log(junk);

// 
vegetables.push("cucumber");

console.log("updated vegies", vegetables);

vege = vegetables.splice(0);
console.log("removed a vege", vege);

fruit.forEach(function(item, index, array) {
  console.log(item, index);
  console.log(array);
});

console.log(vegetables[4]); // because there is no four.

fruit[1] = "Strawberries";
console.log(fruit);

console.log(fruit);

console.log(fruit.pop()); // gets the last item in an array
console.log(fruit.shift()); //gets the first item of an array

vegetables.push("lettuce");

vegetables.splice(1,0, "tomatoes");
console.log(vegetables);
var fruitsandVege = fruit.concat(vegetables);
console.log(fruitsandVege);

vegetables.push(500);
vegetables.push(true);
console.log(vegetables);
console.log(typeof(vegetables.shift()));

var numbers = [2,3,5,6,4,5,6,7];
console.log(numbers);
numbers.splice(2,3);
console.log(numbers)