public class GrizzlyBear extends Bear implements Gatherer{

  public String gatherFood(){
    return super.gatherFood() + "fishing in the river.";
  }

  public String hibernate(){
    return "Finding a cave to sleep in.";
  }
}