package example.codeclan.com.homeworkreview;

import java.util.ArrayList;
import java.util.Random;

/**
 * Created by user on 02/03/2017.
 */

public class Computer {
    Weapon weapon;

    private ArrayList<Weapon> choices;

    public Computer() {
        choices = new ArrayList<Weapon>();
        setupAChoices();
    }

    private Weapon setUpChoices(){
        Random rand = new Random();
        int listSize = getlength();
        int index = rand.nextInt(listSize);
        Weapon choice = choices.get(index);
        return choice;
    }

    private void setupAChoices(){
        choices.add(weapon.ROCK);
        choices.add(weapon.PAPER);
        choices.add(weapon.SCISSORS);
    }


    public int getlength(){
        return choices.size();
    }
}
