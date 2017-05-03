const fs = require('fs');
import React from 'react';

// Exercise 3
// Ex.1

const readFile = (fileName, result) =>{
  return new Promise((resolve, reject) =>{
    fs.readFile(fileName, (err, data) =>{
      if (err) return reject(err);
      resolve(result + data.toString());
    });
  });
}

readFile("1.txt", "")
  .then((result) => readFile("2.txt", result))
  .then((result) => readFile("3.txt", result))
  .then((result) => readFile("4.txt", result))
  .then((result)=> readFile("5.txt", result))
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));

// Not the way you  would want to do that.
// readFile("1.txt", (data) => {
//   let result = data;
//   readFile("2.txt", (data) =>{
//     result += data;
//     readFile("3.txt", (data)=>{
//       result += data;
//       readFile("4.txt", (data)=>{
//         result += data;
//         console.log(result);
//       })
//     });
//   })
// });

// -----------------------------------------------------
// ShortHand Method for getting things out of an array 
// Exercise 2
// Ex.1
var arr = [1,2,3];

var [first,second] = [1,2,3,4];

console.log(first,second);

// ------------------------

// Ex.2 
const myObj = {first:"John", last: "McC"};
const {first: f, last: l} = myObj;

console.log(f, l);

// ------------------------
// Ex.3
const person = {first:"John", last:"McC"};
var logPersonName = ({first,last}) => {
  console.log(first, last);
};

logPersonName(person);

// Ex of destructuring in components

var PersonComponent = ({name, bio, age}) => {
  return(
    <h1>{name}</h1>
    <p>{bio}</p>
    )
}

// -----------------------------------------------------

// Exercise One
// Setting default parameters

// console.log("hello world");

// var showMood = function(name="John", mood="Sleepy"){
//   console.log(name, "is", mood);
// }

// showMood("Michaela", "Happy");
