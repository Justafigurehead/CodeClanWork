package example.codeclan.com.eightball;

import java.util.Scanner;

public class Runner {


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String question;

        
        System.out.println("Say your question.");
        question = sc.nextLine();
        Answer eightball = new Answer();
        System.out.println(eightball.getAnswer());
        System.out.println("Ask again.");
        question = sc.nextLine();
        System.out.println(eightball.getAnswer());
    }

}