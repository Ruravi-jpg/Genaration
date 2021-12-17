/* ------COMPARISON
Ejercicio 1:
Crea una función que incluya un número y comprueba si el número es mayor que 10. Imprima en la consola verdadero si es mayor y falso en caso contrario.
*/
function Exercise1(num) {
    num =prompt(`insert number`)
    if (num>=10) {
        alert(`true ${num}if it is greater `)
    } else {
        alert(`false ${num} otherwise `)
    }
}
Exercise1()

/* FORMA ALTERNATIVA
function comparison(num){
    if (num > 10){
        console.log(true);
    }else{
        console.log(false);
    }
}
num = prompt("Insert number");
comparison(num);
*/

/*
Ejercicio 2:
Crea una función que tome un número y revise si es divisible entre 4 o 9. En caso de ser divisible entre 4 o 9, imprimir "true", en caso de no serlo imprimir "false".
*/

function divisor(num){
    if (num % 4  == 0 || num % 9 == 0){
    console.log(true);
}else{
    console.log(false);
}
}

div = prompt("Insert number");
divisor(div);

/*
function Exercise2(num) {
    num=parseInt(prompt(`insert number`));
    if(num%4===0){
        alert(`${num} if divisible by 4 `)
    };
    if(num%9===0){
        alert(`${num} if divisible by 9`)
    }
}
Exercise2()
*/