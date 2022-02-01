package com.company;
import java.util.Scanner;


public class Name {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);


        System.out.println("Ingresa tu nombre");
        String userName = s.nextLine();

        for(int i = 0; i < userName.length(); i++){
            System.out.println(userName.charAt(i));
        }

    }
}
