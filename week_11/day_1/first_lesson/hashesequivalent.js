var myPerson = {
  name: "Ally",
  age: 38,
  language: "Java",
  address:{
    street: "West Princes",
    houseNumber: 353,
    postcode: [1,2,3,4,5]
  }
};

console.log("myPerson", myPerson);

console.log(myPerson["name"]);
console.log(myPerson['age']);

console.log(myPerson.language); // keys are like properties.

var propertyAge = 'age';

console.log(myPerson[propertyAge]); // useful so we can loop through it. 


myPerson.pet = "Cat";
myPerson.age = 25;
myPerson.name = "Michaela";
console.log("updated my person", myPerson);