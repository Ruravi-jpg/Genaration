package Funciones;

public class Student {
    String firstName;
    String lastName;
    int registration;
    int grade;
    int year;


    public Student(){
        this.firstName = "";
        this.lastName = "";
        this.registration = -1;
        this.grade = -1;
        this.year = -1;
    }

    public Student(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.registration = -1;
        this.grade = -1;
        this.year = -1;
    }

    public Student(String name, String lastName, int registration, int grade, int year){
        this.firstName = name;
        this.lastName = lastName;
        this.registration = registration;
        this.grade = grade;
        this.year = year;
    }

    public void printFullName(){
        System.out.printf("%s %s", firstName, lastName);
    }

    public boolean isApproved(){
        if(grade >= 60){
            return true;
        }
        return false;
    }

    public void changeYearIfApproved(){
        if(isApproved()){
            year++;
            System.out.println("Congratulations");
        }
    }
}
