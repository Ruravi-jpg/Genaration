function weekDay(){
    let dayNumber = parseInt(prompt("Ingresa un número entre 0 y 6"));

    if(dayNumber > 6 || dayNumber < 0){
        console.log("Número inválido");
        return;
    }

    if(dayNumber == 0){
        console.log("Domingo");
    }else if(dayNumber == 1){
        console.log("Lunes");
    }else if(dayNumber == 2){
        console.log("Martes");
    }else if(dayNumber == 3){
        console.log("Miércoles");
    }else if(dayNumber == 4){
        console.log("Jueves");
    }else if(dayNumber == 5){
        console.log("Viernes");
    }else if(dayNumber == 6){
        console.log("Sábado");
    }

}


function weekDaySwitch(){
    let dayNumber = parseInt(prompt("Ingresa un número entre 0 y 6"));


    switch (dayNumber) {
        case 0:
            alert("Domingo");
            break;
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        default:
            alert("Número inválido");
    }

    return 0;
}