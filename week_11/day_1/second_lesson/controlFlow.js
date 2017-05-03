//If statement

var oneName = "Michaela";
var otherName = "Bob";

if (oneName === "Michaela"){ //be explicit.
  console.log("My name is " + oneName);
}
else {
  console.log(oneName + " is not my name.");
}


//If and an else statement. 

var counter = 5;

if (counter > 0 && counter < 5) {
  console.log("The counter is greater than 0.");

} else if (counter === 5) {
  console.log("The counter is equal to 5");
} else {
  console.log("The counter is less than 0.");
}

//BOOM. boom boom shake the room. 

//Switch/case statement
var pet = "rock";
switch (pet){
  case "cat":
    console.log("My pet is a cat.");
    break;
  case "dog" :
    console.log("My pet says woof woof.");
    break;
  case "horse" :
  console.log("My pet is a horse.");
  break;
  default: 
  console.log("Spaceship.");
  break;
  }

//ternary 

console.log(1 + 1 !== 2? "yay maths" : "noes, maths is broken.");

