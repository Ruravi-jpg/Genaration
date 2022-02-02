package com.company;
import java.util.Scanner;
import java.lang.Math;

public class WeightGuru {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Ingresa Tu peso");
        double weight = s.nextDouble();

        System.out.println("Ingresa tu altura");
        double height = s.nextDouble();

        double bodyRadio =  weight / Math.pow(height, 2);

        String result = "";
        if(bodyRadio >= 30.0){
            result = "Obesidad";
        }else if(bodyRadio <= 29.9 && bodyRadio >= 25.0){
            result = "Sobrepeso";
        }else if(bodyRadio <= 24.9 && bodyRadio >= 18.5){
            result = "Normal";
        }else if(bodyRadio < 18.5){
            result = "Bajo peso";
        }

        System.out.println("Tu índice de masa corporal es " + bodyRadio + " por lo cual tu IMC es: " + result);

        s.close();
    }
}
