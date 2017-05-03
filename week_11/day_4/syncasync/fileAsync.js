var fs = require('fs');

//takes in three arguments: name of file, utf-8 (character encoding!), and a callback. In this case an anonymous function that takes in two arguments: err (if there is an error!), data (is the data from the file itself if it works!). 
fs.readFile("./us-states.txt", "utf-8", function(err, data){
  if(err){
    console.log("Uh-oh " + err);
  } else {
    var bufferString = data.toString();
    var lineCount = bufferString.split("\n").length;
    
    console.log(lineCount);
    console.log("You've finished reading the file.");
  }

});

  console.log("The next line of the program.")

