var myPerson = {
  name: "James Jameson",
  age: 79,
  weapon: "walking stick",
  eat: function(){
    console.log("OM nom nom")
  },
  talk: function(){
    console.log("Hi my name is " + this.name);
  }
}

myPerson.talk();


var myDog = Object.create(null);

myDog.smell = "terrible"
myDog.bark = function(){
  console.log("Bark bark");
}

myDog.bark();



var guineaPig = Object.create(null);
guineaPig.name = "piggie";

var killerGuineaPig = Object.create(guineaPig);
console.log(killerGuineaPig);




