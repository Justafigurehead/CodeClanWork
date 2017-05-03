public class Game {
  Rollable dice;
  private int turnCount;

  public Game(Rollable dice) {
    this.dice = dice;
    this.turnCount = 0;
  }

  public boolean nextTurn(){
    int result = dice.roll();
    this.turnCount++;
    return result > 2;

    // Return true if result is greater than two. 
    // Return false if result is less than two. 
  }

  public int getTurnCount(){
    return this.turnCount;
  }

  
}