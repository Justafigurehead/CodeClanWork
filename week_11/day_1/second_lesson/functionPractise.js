function speak(firstName,lastName){
  return "Hiya " + firstName + " " + lastName;
}

function multi(a,b){
  return a * b;
}

function firstInArr(array){
  return array.shift();
}

function listEachName(array){
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

//or 

function listEachNameAnotherWay(arr){
  for (var name of arr){
    console.log(name);
  }
}

  console.log(speak("Michaela", "Strachan"));

  console.log(multi(2,2));

  var names = ["Michaela", "Michael", "Mickie", "Kayal", "Kayla"];

  console.log(firstInArr(names));

  listEachNameAnotherWay(names);
  listEachName(names);