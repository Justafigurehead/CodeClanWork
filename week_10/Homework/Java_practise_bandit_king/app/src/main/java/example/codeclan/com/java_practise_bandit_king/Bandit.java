package example.codeclan.com.java_practise_bandit_king;

import java.util.ArrayList;

public abstract class Bandit {

     String name;
     int hlthPts;
     ArrayList<Weapon> hand;

    public Bandit(String name, int health, ArrayList hand){
        this.name = name;
        this.hlthPts = health;
        this.hand = new ArrayList<Weapon>();
    }

    public abstract String speak();
    public abstract String attack();
    public abstract String takeDmg();

    public String shout(){
        return "I AM A BANDIT!";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHlthPts() {
        return hlthPts;
    }

    public void setHlthPts(int hlthPts) {
        this.hlthPts = hlthPts;
    }

    public ArrayList<Weapon> getHand() {
        return hand;
    }

    public void setHand(ArrayList<Weapon> hand) {
        this.hand = hand;
    }


}
