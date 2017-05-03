package example.codeclan.com.eightball;


import java.util.ArrayList;
import java.util.Random;


public class Answer implements Answerable {
    private ArrayList<String> answers;

    public Answer(){
        answers = new ArrayList<String>();    // default of empty
        setUpAnswers();
    }

    public Answer(ArrayList<String> answers){
        this.answers = new ArrayList<String>(answers); // Method overloading
    }


//    Methods below


        public ArrayList<String> getAnswers(){
            return new ArrayList<String>(answers);
         }

        public int getSize(){
          return answers.size();
        }

        public String getAnswerAtIndex(int index){
            return answers.get(index);  //Not remove because you don't want to delete it from the ArrayList.
        }

        public String getAnswer(){
            //Random function!
            Random rand = new Random();
            int listSize = getSize();
            int index = rand.nextInt(listSize); //listSize caps the random on listSize at one below and starts at 0.
            String result = getAnswerAtIndex(index);
            return result;
         }

        public void addAnswer(String value){
            this.answers.add(value);
        }

        private void setUpAnswers(){
            String[] answersToAdd = {"Yes", "No", "Maybe So", "Try Again Later", "Feck off"};
            for (String answer : answersToAdd){
                addAnswer(answer);
            }
        }
}
