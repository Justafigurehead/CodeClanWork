import java.util.Scanner;

public class Console {
  Scanner sc;
  String data;

  public void start() {
    System.out.println("Please enter the word.");
    sc = new Scanner(System.in);
    data = sc.nextLine();
    System.out.println("\033[H\033[2J]");
    System.out.flush();
    // sc.close();
    Word word = new Word(data);

    System.out.println(word.hide());

    while(!player.isDead() && !game.isWon()){
      System.out.println("Player, make a guess.");
      
      String guess = sc.nextLine();

      char[] characterGuessArray = guess.toCharArray();
      char characterGuessSingleChar = characterGuessArray[0];
      System.out.println(characterGuessSingleChar);

      word.evaluate(characterGuessSingleChar);

      
    }
    
   


    // System.out.println(playerGuess.getWord());




  }
}