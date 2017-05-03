package example.codeclan.com.java_practise_bandit_king;

public class Weapon {

    private int attkpts;
    private String specialAttack;
    private String name;

    public Weapon(String name, int attackpoints, String specialAttack){
        this.name = name;
        this.attkpts = attackpoints;
        this.specialAttack = specialAttack;
    }

    public int getAttkpts() {
        return attkpts;
    }

    public void setAttkpts(int attkpts) {
        this.attkpts = attkpts;
    }

    public String getSpecialAttack() {
        return specialAttack;
    }

    public void setSpecialAttack(String specialAttack) {
        this.specialAttack = specialAttack;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
