var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water Bottle', function(){
  beforeEach(function(){
    bottle.volume = 0;
  });

  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  })
  it('should be able to fill waterbottle to 100', function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  it('bottle vol should go down by ten when someones drinks', function(){
    bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume);
  });
  it ('volume should be empty when empty is called', function(){
    bottle.empty();
    assert.equal(0, bottle.volume);
  })
  it ('can\'t take a drink when bottle is empty', function(){
    bottle.empty();
    bottle.drink();
    assert.equal(0, bottle.volume);
  });

})