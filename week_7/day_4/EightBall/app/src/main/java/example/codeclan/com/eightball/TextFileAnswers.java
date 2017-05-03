package example.codeclan.com.eightball;

import android.util.Log;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;


public class TextFileAnswers implements Answerable {
    private ArrayList<String> answers;
    Scanner fileReader;


    public TextFileAnswers(InputStream file) {
        this.answers = new ArrayList<String>();
        fileReader = new Scanner(file);
        setUpAnswers();
    }

    private void setUpAnswers(){
        boolean moreLinesToRead = fileReader.hasNextLine();
        while (moreLinesToRead) {
            String lineOfText = fileReader.nextLine();
            Log.d("FileAnswer", "Adding" + lineOfText + "to answers");
            answers.add(lineOfText);
            moreLinesToRead = fileReader.hasNextLine();
        }
    }


    public String getAnswer(){
        Random randAn =  new Random();
        int length = answers.size();
        int index = randAn.nextInt(length);
        String result = answers.get(index);
        return result;
    }
}
