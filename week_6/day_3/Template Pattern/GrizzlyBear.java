public class GrizzlyBear extends Bear {

  public void gatherFood(){
    System.out.println("Gathering berries");
  }

  @Override
  public void wakeUp( ){
    System.out.println("ARGGG! I slept in!!!");
  }

}