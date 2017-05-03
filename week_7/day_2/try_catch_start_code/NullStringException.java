// Whenever we get a null pointer exception, it's going to pass a message into this using the extensions. 

// The exception function has a 'print message' function so it can take a message and print something out. 

public class NullStringException extends Exception {

  // Pass in a string as a constructor...

  public NullStringException(String message){
    super(message);
  }

  // public String getMessage(){
  //   return super(message);
  // }

}