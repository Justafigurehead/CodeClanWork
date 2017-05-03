var fs = require('fs');

var buffer = fs.readFileSync("./us-states.txt");
var bufferString = buffer.toString();

var lineCount = bufferString.split("\n").length;

console.log(lineCount);
console.log("There are " + lineCount + " in the file.");
console.log("You've finished reading the file!");




