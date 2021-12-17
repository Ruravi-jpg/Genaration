/*------STRING FUNCTION
Ejercicio 1:
Queremos revisar si una cadena de caracteres está vacía. Si no está vacía, queremos imprimir el primer caracter de la cadena. Si está vacía, queremos imprimir "This string is empty".
*/
function checkEmptyString(str) {
    if (str != ""){
        console.log(str.charAt(0)); 
    }else{
        console.log("This string is empty.");
    }
}
// Example test, should return a
checkEmptyString("apple");

/*Ejercicio 2:
Queremos revisar si dos cadenas de caracteres son iguales tomando en cuenta las mayúsculas y minúsculas. Si son iguales, regresa "true", si no, regresa "false".
*/
function checkTwoStringsSame(str1, str2) {
    str1=prompt(`insert string 1`).toUpperCase()
    str2=prompt(`insert string 2`).toUpperCase()
    if (str1.length==str2.length) {
        for (let index = 0; index < str1.length; index++) {
            if (str1[index]===str2[index]) {
                if (index+1===str1.length) {
                    alert(`true`)
                }
            } else {
                alert(`false`)
            }
        }
    } else {
        alert(`false `)
    }
}
checkTwoStringsSame()

/* FORMA ALTERNATIVA
function checkTwoStringsSame(str1, str2) {
    if (str1.toLowerCase() == str2.toLowerCase()){
        console.log(true)
    }else{
        console.log(false)
    }
}
// Example test, should return true
checkTwoStringsSame("String1", "string1");
*/