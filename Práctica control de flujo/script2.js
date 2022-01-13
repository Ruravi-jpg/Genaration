function greet(){
    alert("Ingresa tus datos para saber si eres elegible para participar en el Bootcamp");

    let userName = prompt("Ingresa tu numbre");
    let userAge = parseInt(prompt("Ingresa tu edad"));

    if(userAge < 29 && userAge > 18){
        alert("¡Felicidades "+ userName +", cumples con los requisitos para ser aceptado en el Bootcamp Java Full Stack de Generation!");
    }else{
        alert("No cumples con los requisitos para el programa");
    }

    console.log("El nombre del usuario es: " + userName);
    console.log("la edad del usuario es: " + userAge);

}

greet();
