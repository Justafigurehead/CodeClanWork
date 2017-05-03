var athlete = require('../athlete');
var assert = require('assert');
var bottle = require('../water_bottle')

describe('athlete', function(){
  beforeEach(function(){
    athlete.hydration = 100;
    athlete.distance = 0;
  });

  it(' has 100 hydration', function(){
    assert.equal(100, athlete.hydration);
  });

  it(' has a distance property that starts at 0', function(){
    assert.equal(0, athlete.distance);
  });
  
  it('should be able to run and gain distance', function(){
    athlete.run(10);
    assert.equal(10, athlete.distance);
  });
  
  it('for ever 1 run, athlete loses 10 hydration', function(){
    athlete.run(5);
    assert.equal(50, athlete.hydration);
  });

  it(' cannot run if they have low hydration', function(){
    athlete.hydration = 0;
    athlete.run(10);
    assert.equal(0, athlete.distance);
  });

  it(' can take a drink and increase hydration', function(){
    athlete.hydration = 10;
    bottle.fill();
    athlete.takeADrink(bottle);
    assert.equal(20, athlete.hydration)
  });
})

