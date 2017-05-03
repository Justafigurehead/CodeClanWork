var SolarSystem = require('../SolarSystem');
var Planet = require('../planet');
var assert = require('assert');

describe('SolarSystem', function(){

  var pluto;
  var venus;
  var ss;
  
  beforeEach(function(){
     pluto = new Planet("Pluto");
     venus = new Planet("Venus");
     ss = new SolarSystem ("Space shit");
  });

  it('should have empty array of planets', function(){
    assert.equal(0, ss.planets.length);
  });
  
  it ('should have one planet', function(){
    ss.gainPlanet(pluto);
    assert.equal(1, ss.planets.length);
    assert.equal('Pluto', ss.planets[0].name);
  });

})