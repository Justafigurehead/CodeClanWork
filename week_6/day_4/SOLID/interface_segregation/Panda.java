public class Panda extends Bear implements Bambooable, ClimbRockable{

  public Bamboo harvestBamboo(){
    return new Bamboo();
  }

  public String climbRock(){
    return "I'm on a rock, not much to do up here, nice spot for a sleep maybe.";
  }

}