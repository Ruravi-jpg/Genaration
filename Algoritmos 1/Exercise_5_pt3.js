/*Tenemos 3 artículos y sabemos el precio de cada uno. Sin embargo, solo podemos comprar los dos artículos menos costosos.Escriba un algoritmo que tome tres entradas de usuario y envíe los dos precios más pequeños a la consola.*/
function markert(val1,val2,val3) {
    val1=parseInt(prompt(`value1`))
    val2=parseInt(prompt(`value2`))
    val3=parseInt(prompt(`value3`))
    let aux=val3
    if (aux>val1) {aux=val1}
    if (aux>val2) {aux=val2}
    if (aux>val3) {aux=val3}
    let aux2=val1+1
    if ((aux2>val1)&&(aux<val1)) {aux2=val1}
    if ((aux2>val2)&&(aux<val2)) {aux2=val2}
    if ((aux2>val3)&&(aux<val3)) {aux2=val3}
    console.log(`${aux} ${aux2}`)}

markert(1,2,3)
markert(2,3,1)
markert(3,2,1)