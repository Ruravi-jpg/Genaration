package com.company;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Ingresa la calificación");

        int grade = s.nextInt();



        System.out.println("Tu score es " + getScore(grade));

        s.close();
    }


     static String getScore(int grade){
        String score ="";

        if (grade<=3){
            score = ("Failed");
        }
        else if (grade>=3&&grade<5) {
            score = ("Insufficient");
        }
        else if (grade>=5&&grade<=9) {
            score = ("Good");
        }
        else if (grade==10) {
            score = ("Excellent");
        }
        else {
            score = ("Error, dato no valido");
        }


        return score;
    }
}
