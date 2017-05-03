var House = function(sqFeet, bathrooms, bedrooms){
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.clean = function(){
    console.log("Your house is a disgrace, but I've cleaned it.");
  }
}

var house1 = new House(10000, 4, 3)
house1.clean();

var Office = function(cubicles, watercooler, meetingRooms){
  this.cubicles = cubicles;
  this.watercooler = watercooler;
  this.meetingRooms = meetingRooms;
  this.avgdesksperroom = function(){
    var total = this.cubicles / this.meetingRooms;
    return total.toFixed(2);
  };
};

var officeOne = new Office(10, 1, 3);

console.log(officeOne.avgdesksperroom());