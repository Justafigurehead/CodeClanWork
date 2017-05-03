package example.codeclan.com.looppractise;

import java.util.Scanner;

public class WhileLoop {
    int input;

    public void whileLoopTest(){
        int x = 1;
        while(x > 0 && x < 10){
            System.out.println("x = " + x);
            x++;
        }
        System.out.println("Loop has ended and x = " + x);
    }

    public void executeWhileLoop(){
        int number = 3;

        while ( input!= number){
            getGuess();
        }

        System.out.println("Correct Guess. x = " + number);
    }

    public void getGuess(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Guess a number between 1 and 5");
        input = Integer.parseInt(sc.nextLine());
    }

    public void doWhileLoopExample(){
        int x = 11;
        do{
            System.out.println("x = " + x);
            x++;
        } while ( x < 10); // will keep on going until condition is false.
        System.out.println("Loop ended");
    }
}
