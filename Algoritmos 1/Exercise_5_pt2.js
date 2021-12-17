//El Usario debe de ingresar 5 numeros 
function mayor(val1,val2,val3,val4,val5) {
    val1=parseInt(prompt(`value1`))
    val2=parseInt(prompt(`value2`))
    val3=parseInt(prompt(`value3`))
    val4=parseInt(prompt(`value4`))
    val5=parseInt(prompt(`value5`))
    let aux=val5
    if (aux<val1) {
        aux=val1
    }
    if (aux<val2) {
        aux=val2
    }
    if (aux<val3) {
        aux=val3
    }
    if (aux<val4) {
        aux=val4
    }
    if (aux<val4) {
        aux=val4
    }
    alert(aux)
}