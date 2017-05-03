public interface Bearable{

  // This interface is trying to be all Bears to all people.
  // It really needs broken up into multiple smaller interfaces, otherwise it's not much use.
  // and it certainly breaks the interface segregation principle, by forcing the implementation of methods that are extremely unlikely to be used.


// ORIGINAL LIST OF NECESSARY METHODS::
  // public Salmon riverFish(); - Riverable
  // public Seal iceFish(); - IceFishable
  // public Honey harvestHoney(); - Honeyable
  // public Bamboo harvestBamboo(); - Bambooable

  public String sleep();
  
  // public String climbRock(); - ClimbRockable
  // public String climbTree(); - ClimbTreeable
  // public String climbIceberg(); ClimbIceBergable
  
  public void eat(Edible food);




// BEAR NECESSITIES - Option 2
  // public String gatherFood();
  // public String sleep();
  // public String climb();
  // public void eat(Edible food);



}