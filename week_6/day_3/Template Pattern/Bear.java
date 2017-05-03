public abstract class Bear {


// Abstract functions

  public abstract void gatherFood();

// Concrete functions

  public void roar(){
    System.out.println("roar!");
  }

  public void typicalDay(){
    wakeUp();
    gatherFood();
    roar();
    eat();
    sleep();   
  }

  public void wakeUp(){
    System.out.println("Wake me up before I go go");
  }

  public void eat(){
    System.out.println("Nom nom");
  }

  public void sleep(){
    System.out.println("Zzz");
  }


}