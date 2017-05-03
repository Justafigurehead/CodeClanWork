var athlete = {
  hydration: 100,
  distance: 0,
  run: function(distanceRan){
    if (distanceRan * 10 <= this.hydration){
    this.distance += distanceRan;
    this.hydration -= distanceRan * 10;
    }
  },
  takeADrink: function(bottle){
    if (bottle.drink() === true){
    this.hydration += 10;
    }
  }
}

module.exports = athlete;