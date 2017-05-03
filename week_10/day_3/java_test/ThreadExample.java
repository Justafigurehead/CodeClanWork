public class ThreadExample implements Runnable{

  private int i;
  public volatile boolean timeToQuit = false;

  @Override
  public void run(){
    while (Thread.interrupted()){
      for(int i = 0; i < 100; i++){
        System.out.println(i);
      }
    }
  }
//bit redundant to extend a class because it overrides the run method so we can't have multiple threads. It also makes it so this class is closely bound to another which makes it harder to work with. By implementing Runnable it provides the class with more functionality. 
}