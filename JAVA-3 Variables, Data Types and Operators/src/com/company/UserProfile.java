package com.company;
import java.util.Calendar;
import java.util.Scanner;


public class UserProfile {
    public static void main(String[] args){

        Scanner s = new Scanner(System.in);


        System.out.println("Ingresa tu nombre");
        String userName = s.nextLine();

        System.out.println("Ingresa tu edad");
        int userAge = s.nextInt();
        s.nextLine();

        System.out.println("Ingresa tu Genero");
        String userGender = s.nextLine();

        System.out.println("Ingresa tu Trabajo");
        String userJobPreference = s.nextLine();

        System.out.println("Ingresa tu nacionalidad");
        String userNationality = s.nextLine();

        System.out.println("Ingresa tu tipo de sangre");
        String userBloodType = s.nextLine();

        System.out.println(String.format("Nombre %s, edad %s, genero %s, Trabajo %s, nacionalidad %s, tipo de sangre %s", userName, userAge, userGender, userJobPreference, userNationality, userBloodType));

        int currentYear = Calendar.getInstance().get(Calendar.YEAR);

        System.out.println("Naciste en el año " + (currentYear - userAge));
    }



}
