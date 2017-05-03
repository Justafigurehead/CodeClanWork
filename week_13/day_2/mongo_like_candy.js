use farm;

db.animals.insert({
  name: "Erik", 
  type: "Polar Bear"
}, 
{
  name: "Paula",
  type: "Panda", 
  color: "White"
})

db.animals.insert({
  name: "Freddie", 
  type: "Frog"
});
db.animals.insert({
  name:"Fred",
  type: "Flamingo"
});

show collections; 
db.animals.find({name: "Freddie"}).pretty();

// db.animals.update(
// {name: "Freddie"},
// {
//   name: "", 
//   type: "Parrot"
// }
// );

db.animals.remove({name:"Freddie"});
db.animals.find();

db.dropDatabase();