public class PolarBear extends Bear implements Gatherer {
  
  public String gatherFood(){
    return super.gatherFood() + "breaking the ice.";
  }

  public String hibernate(){
    return "Finding an igloo to sleep. Zzz."; 
  }

   
}