use codeclan

db.createCollection("students", {capped: true, size: 16});

db.students.insert([{
  name: "Michaela",
  favouriteFood: "Quiche"
}, 
{
  name: "John", 
  favouriteFood: "chips"
},
{
  name: "Daniel", 
  favouriteFood: "Jam"
}, 
{
  name: "Ellen", 
  favouriteFood: "Dreamies"
}]);
db.students.find().pretty();

db.createCollection("staff");

db.staff.insert([{
  {
    name: "john",
    loves: "Quiche"
  },
  {
    name: "Steven", 
    loves: "Pixel art"
  }, 
  {
    name: "Ally", 
    loves: "Cats"
  }
}]);

db.instructors.createIndex({index: 1});

db.staff.explain();
db.dropDatabase();