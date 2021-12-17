/* --------USER INPUT
Cree una función que tome 2 entradas (usando el indicador) * y pasa por los 5 operadores aritméticos (+, -,, *, *%). El resultado esperado en la consola es: * `La suma es x` -> x es la suma calculada * `La resta es y` -> y es la diferencia calculada * `La multiplicación es z` -> z es la multiplicación calculada * `La división es w` -> w es la división calculada * `El resto es q` -> q es el resto calculado
*/
var numero1=parseInt(prompt("Ingrese el primer numero:" ));
var numero2=parseInt(prompt("Ingrese el segundo numero:" ));
function mathematicOperations(){
    var1=numero1+numero2;
    var2=numero1-numero2;
    var3=numero1*numero2;
    var4=numero1/numero2
    var5=numero1&numero2
    alert("la suma es: " +var1+ "\nla resta es: " +var2+ "\nla multiplicacion es: "+var3+  "\nla division es: "+var4+ "\ny el resto es: "+var5);//el resultado lo esta pidiendo en la consola 
}
mathematicOperations();
console.log("numero 1: "+numero1+ "\nnumero 2: "+numero2)
console.log("la suma es: " +var1+ "\nla resta es: " +var2+ "\nla multiplicacion es: "+var3+  "\nla division es: "+var4+ "\ny el resto es: "+var5);

/*
function mathematicOperations() {
    let num1=parseInt( prompt(`insert 1 number`))
    let num2=parseInt( prompt(`insert 2 number`))
    console.log(`the sum is ${num1+ num2}`)
    console.log(`the subtraction is ${num1-num2}`)
    console.log(`the multiplication is ${num1*num2}`)
    console.log(`the division is ${num1/num2}`)
    console.log(`the remainder is ${num1%num2}`)

    

}

mathematicOperations();
*/