var wisePerson = {
  wisdom: function(){
    console.log("Commit often.");
  }
}

var myPerson = Object.create(null);

var secondPerson = Object.create(wisePerson);

secondPerson.walk = function(){
  console.log("Left, Right, Left, Right, Left");
}


secondPerson.walk();
secondPerson.wisdom();
console.log(secondPerson);