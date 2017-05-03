


var car = {
  make: "Lamborghini"
}


// var getMake = function(){
//   console.log(this.brand);
// };


// car.getMake = getMake;

// car.getMake();
// getMake();


//Objects and Functions 

// var content = "I'm in the global scope."

// function simpleCall(){
//   console.log(this.content);
// }

// simpleCall();

// var message = {
//   content: "I'm a javascript ninja!",
//   showContent: function(){
//     console.log(this.content);
//   }
// }

// message.showContent();

//Constructors 


function Message(content){
  this.content = content;
  this.showContent = function(){
    console.log(this.content);
  };
}

var message = new Message("This is driving me nuts!");

message.showContent();


//Bind This to something in particular.

var Animal = function(type, legs){
  this.type = type;
  this.legs = legs;
  this.loginfo = function(){
    console.log(this === myCat);
    console.log("The " + this.type + " has " + this.legs + " legs.")
  }
};



myCat = new Animal("cat", 4);

setTimeout(myCat.loginfo.bind(myCat), 3000)

myDog = new Animal("dog", 4);
myDog.loginfo();


//       /\                            /\
//      //\\                          //\\
//     //\/\\                        //\/\\
//    //\\//\\                      //\\//\\
//   //\\/\//\\                    //\\/\//\\
//  |          |                  |          |
//  |  []  []  |_   _   _   _   _ |  []  []  |
//  |          | |_| |_| |_| |_|  |          |
//  |          |                  |          |
//  |          |                  |          |
//  |          |                  |          |



