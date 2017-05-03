
var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;
  this.belly = [];
  };

Fish.prototype = { 

  swim: function(){
    console.log("Just keep swimming...");
  },
  catch: function(){
    console.log("OH noes! " + this.name + ' has been caught.');
  },
  eat: function(){
    this.belly.push("plankton");
  },
};

var redFish = new Fish("Jam", "red");
var nemo = new Fish("Nemo", "Orange");
redFish.swim();
nemo.catch();
redFish.catch();

redFish.eat();
nemo.eat();
// console.log(nemo.__proto__);


