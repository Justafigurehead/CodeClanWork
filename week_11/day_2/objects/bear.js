var myBear = {
  name: "Rupert",
  type: "Polar Bear",
  belly: [],
  eat: function(food){
    this.belly.push(food);
  }
}

var food = "I am a piece of food."
myBear.eat(food);

console.log(myBear.belly);