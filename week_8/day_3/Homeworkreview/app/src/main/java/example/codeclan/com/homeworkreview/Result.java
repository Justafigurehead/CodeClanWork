package example.codeclan.com.homeworkreview;


import static example.codeclan.com.homeworkreview.Weapon.PAPER;
import static example.codeclan.com.homeworkreview.Weapon.ROCK;
import static example.codeclan.com.homeworkreview.Weapon.SCISSORS;

public class Result {

    private Weapon weapon;

    public int compareResults(Weapon userMove, Weapon compMove){
        if (userMove == compMove) {
            return 0;
        }
            switch (userMove) {
                case ROCK:
                    return (compMove == SCISSORS ? 1 : -1);
                case SCISSORS:
                    return (compMove == PAPER ? 1 : -1);
                case PAPER:
                    return (compMove == ROCK ? 1 : -1);
            }
            return 0;
        }


    }


