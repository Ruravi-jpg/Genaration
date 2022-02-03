package Funciones;
import Funciones.Student;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class sortByGrade implements Comparator<Student>
{
    public int compare(Student a, Student b)
    {
        return a.grade - b.grade;
    }
}

public class Classes {
    String className;
    String professorName;
    int year;
    ArrayList<Student> studentList;

    public Classes(String className, String professorName, int year) {
        this.className = className;
        this.professorName = professorName;
        this.year = year;
        studentList = new ArrayList<Student>();
    }

    public void enroll(Student student){
        studentList.add(student);
    }

    public void enroll(Student[] students){
       for(Student s: students){
           studentList.add(s);
       }
    }

    public void unEnroll(Student student){
        studentList.remove(student);
    }

    public int countStudents(){
        return studentList.size();
    }

    public int bestGrade(){
        Collections.sort(studentList, new sortByGrade());
        return studentList.get(studentList.size() - 1).grade;
    }
}
