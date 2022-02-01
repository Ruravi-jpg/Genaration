package com.company;
import java.util.Scanner;


public class Fibonacci {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Ingresa un número para calular secuencia de Fibonacci");


        int n = s.nextInt();
        int a=0;
        int b=0;
        int result=1;

        int cont = 1;

        System.out.println("0");
        System.out.println("1");
        do {
            a=b;
            b=result;
            result=a+b;
            System.out.println(result);
            cont++;
        }while(cont<n);
    }
}
