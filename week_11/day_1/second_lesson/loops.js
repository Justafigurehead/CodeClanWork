var pets = ["dog", "cat", "horse", "rock", "banana", "jam"];

// fetches the index.
for (pet in pets){
  console.log(pets[pet]);
}



// more complex version

for (var i = 0; i <pets.length; i++){
  console.log(pets[i]);
}

console.log(pets);


for (var pet of pets){
  console.log(pet);
}

var students = {student1:3, student2:12, student4:30};


for (var key in students){
  console.log("obj." + key + "=" + students[key]);
}


var x = 0;
while(x < 10){
  console.log("loop" + x);
  x++;
}