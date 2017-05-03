// # JS Day 1 Lab

// Go through each sample code and work out what the output will be and explain what happened.

// ### Episode 1

var name = 'John';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

    // assigning the name "John" to name variable. Then we are declaring an anonymouse function and assigning it to variable name printName and calling the variable name before as printName(). This means the anonymouse function is invoked and it will print to console "My name is John" because var name = John. 

// ### Episode 2

score = 5;

var result = function(){
  var score = 3;
  return score;
};

console.log(result());

    // we are assigning a global variable called score which equals 5. We are then declaring an anonymous function and assigning it to variable name result. We have a local variable also called score that equals five inside this declaration and then the function return the score. 

    // After the declaration we are invoking the variable name that the function is assigned too (result) and wrapping in it console.log so it will print to the screen the result. Which will equal 3 because the function will look at the local variable before the global variables.


// ### Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
      
      // this function has an array of animals species assigned to the variable called myAnimals. We are then declaring an anonymous function and assigning it to a variable name of listAnimals. Inside the declaration of the anonymous function is an array list myAnimals that is overwriting the global variable. We are then using a for loop to look at all the animals in the loop one by one until it reaches the array length. With each loop it is printing to the screen a list of all the animals which will look like: 

      // 0 : Ducks
      // 1 : Dogs
      // 2 : Lions



// ### Episode 4

var suspectOne = 'John';
var suspectTwo = 'Ally';
var suspectThree = 'Alan';
var suspectFour = 'Steve';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

      // this episode has four variables (suspectOne, suspectTwo, suspectThree, suspectFour), each one is assigned to a string that represents a name. Then it is declaring an anonymous function that is assigned to a variable titled allSuspects. Inside the declaration the function has a local variable that won't overwrite the global one but will take priority so instead of suspectThree being Alan, it will be Harvey. 

      //The declaration is then printing to the screen a list of all the suspects which will result in this 'Suspects include John, Ally, Harvey, Steve'  

      //It is then invoking this function and hte result and then calling console.log to print suspect three is to the screen but the variable suspect three will differ from the function assigned to allSuspects. In this case it will say "Suspect three is Alan." because it will look to the global variable because allSuspects() does not overwrite the global variable.



// ### Episode 5


var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

      // this episode has an object assigned to variable name detective that has two keys called name and pet with the values Ace Ventura and monkey. It then declares an anonymous function assigned to printName which takes in an argument of detective and returns the detective's name. 

      // There is a second anonymous function which is assigned to detectiveinfo. It does not take any arguments but instead uses the global variable detective and overwrites the detective's name so its 'poirot' and calls the function printName and passes in detective with its updated value. So when console.log(detectiveInfo()) is called it will then print out 'Poirot.'


//### Episode 6

var murderer = 'Steve';

var outerFunction = function() {
  var murderer = 'Alan';

  var innerFunction = function() {
    murderer = 'Ally';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

    // In episode six a global variable called murderer has the value 'Steve' assigned to it. It then declares an anonymouse function and assigns it to the variable name outerfunction. Inside this declaration there is a local variable also called murderer but its value is Alan. Afterwards a second anonymous function is declared and assigned to innerFunction. It overwrites the variable murderer so hte value is Ally. But in this case it does not overwrite the global variable but the parent local variable. 

    //The method outerfunction() then calls innerfunction(). THen the outerfunction is invoked and the console outputs to the screen "the murderer is", murderer" but in this case the murderer's name is still Steve. DUN-DUN-DAAAAA 

// ### Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.