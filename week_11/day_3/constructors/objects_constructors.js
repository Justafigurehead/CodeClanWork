var politician = {};

politician.scheminglvl = 100;
politician.likeability = 5;
politician.schooling = "Eton";

console.log(politician);

var otherPolitician= new Object();

otherPolitician.name = "Boris";
otherPolitician.primeMinister = false;
console.log(otherPolitician);

var house1 = {
  sqFeet: 8000,
  bathrooms: 4,
  taxEvaded: true
};

var house2 = {
  sqFeet: 10000,
  bedrooms: 3, 
  claimMade: true
};

var House = function(sqFeet, unclaimed, bathrooms, bedrooms, owner){
  this.sqFeet = sqFeet;
  this.unclaimed = unclaimed;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.owner = owner;
}

var house1 = new House(1000, false, 2, 4, otherPolitician);
var house2 = new House(20000, false,2, 10, otherPolitician );
console.log("house1", house2);
console.log("house2", house1);