//Call Back Lesson 23.03.2017

// var callMe = function(){
//  console.log("I am an anonymous function with a reference point called CallMe!");
// }

// function callMe(){
//   console.log("Ding-Dong, I'm inside a callback function and I am a named function! It doesn't matter where you put me because I am not assigned or referenced by a variable like the function above.");
// }; // named function

// setTimeout(callMe, 2000);

var logRed = function(){
  console.log("My case is red!");
}

var logNotRed = function(){
  console.log("My case is actually green! Oh Noes!");
}

var redChecker = function(colour, isRed, isNo){
  if (colour === "red"){
     isRed();
  } else {
     isNo();
  }
};

// redChecker("green", logRed, logNotRed);
var author = "Bob Harris";

var item = {
  title:"Arty Conan Doyle",
  pgCt: 288,
  genre: "mystery"
}

function publish(item, author, callback){
  console.log(item);
  var date = new Date();
  callback(author, date);
}

function messages(author, date){
  var sendTime = date.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime);
}

function articleDetails(author, date){
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published on " + pubDate);
}

publish(item, author, articleDetails);