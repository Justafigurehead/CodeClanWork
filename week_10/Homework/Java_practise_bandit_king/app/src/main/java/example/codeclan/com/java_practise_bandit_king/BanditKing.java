package example.codeclan.com.java_practise_bandit_king;

import java.util.ArrayList;

/**
 * Created by user on 08/04/2017.
 */

public class BanditKing extends Bandit {

    public BanditKing(String name, int health, ArrayList hand) {
        super(name, health, hand);

    }

    @Override
    public String shout(){
        return "I AM " + this.name + "and I am the Bandit King!";
    }

    @Override
    public String speak() {
        return "Argh!";
    }

    @Override
    public String attack(){
        Weapon weapon = this.hand.get(0);
        if (getNumberOfItems() == 0){
            return "Alas I am without a weapon, HALP!";
        }
        return "Don't come a step closer or I will hit you with my" + weapon.getName();
    }

    @Override
    public String takeDmg() {
        return null;
    }

    public int getNumberOfItems(){
        return this.hand.size();
    }


}
