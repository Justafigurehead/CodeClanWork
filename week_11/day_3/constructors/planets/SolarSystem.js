var SolarSystem = function(solarSystemName){
  this.name = solarSystemName;
  this.planets = [];
  this.gainPlanet = function(planet){
    this.planets.push(planet);
  }
};

module.exports = SolarSystem;