import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.assertEquals;

public class WordTest{

  Word guess;
  Word secretWord;

  @Before
  public void setup(){
    guess = new Word("Y");
    secretWord = new Word("No");
  }

  // @Test
  // public void canTestEvaluate(){
  //   assertEquals(-1, guess.evaluate(secretWord));
  // }
}