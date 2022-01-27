package com.company;
import java.lang.Math;
import java.util.Scanner;

public class Circle {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Please entre the diametre of the Circle ");
        double diametre = s.nextDouble();

        double area = Math.PI*Math.pow(diametre/2, 2);
        double perimetre = 2*Math.PI*(diametre/2);

        System.out.println("The Area of the Circle is "+area);
        System.out.println("The Perimetre of the Circle is "+perimetre);
        s.close();
    }

}

