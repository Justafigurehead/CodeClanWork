package example.codeclan.com.stringsplit;


public class StringSplitter {

    private String input;

    public StringSplitter(String input){
        this.input = input;
    }

    public void splitString(){
        int numOfWords = 0;
        String[] words = input.split(" ");
        for (String s : words){
            System.out.println(s);
            numOfWords ++;
        }
        System.out.println(Integer.toString(numOfWords));
    }
}
