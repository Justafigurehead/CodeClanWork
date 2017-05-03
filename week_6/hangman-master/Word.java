public class Word {

  private String word; // User enters "hello" -> "hello"
  private StringBuilder hiddenWord; // Word is hello -> hiddenWord = "*****"

  public Word(String word) {
    this.word = word;
  }

  public String hide() {
    hiddenWord = new StringBuilder();
    for (char character : word.toCharArray()) {
      hiddenWord.append("*");
    }

    return hiddenWord.toString();
  }

  public String getWord() {
    return this.word;
  }

 //  public int evaluate(StringBuilder hiddenWord) {
 //    // String secretWord= hiddenWord.toString;
 //   return hiddenWord.indexOf(this.word);
 // }



 // playerGuess = new StringBuilder();
 // hiddenWord  = new StringBuilder();
 // for(char character : word.toCharArray()) {
 //  if (playerGuess == hiddenWord) {
 //    return "Yes";
 //  }

 //  return "No";



    // }



}