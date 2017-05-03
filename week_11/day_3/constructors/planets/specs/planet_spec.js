var Planet = require('../planet');
var assert = require('assert');

describe('planet', function(){
  
  var planetOne;

  beforeEach(function(){
    planetOne = new Planet("Pluto");
  });

  it('should have a name of Pluto', function(){
    assert.equal("Pluto", planetOne.name);
  });
})