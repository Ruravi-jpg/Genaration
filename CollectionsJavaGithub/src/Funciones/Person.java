package Funciones;

public class Person {
    private String nombre;
    private String apellido;
    private int edad;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public int getEdad() {
        return edad;
    }



    public Person(String nombre, String apellido, int edad) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    public static void main(String[] args) {
        Person persona1 = new Person("Ruravi", "Mojica", 22);

        System.out.println("El nombre es " + persona1.getNombre());
        System.out.println("El apellido es " + persona1.getApellido());
        System.out.println("La edad es " + persona1.getEdad());


    }
}
