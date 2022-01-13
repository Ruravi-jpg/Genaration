const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];


function businessHours(dayNumber, hourNumber){
    let minHour = 9;
    let maxHour = 18;

    if(weekDays[dayNumber] == "Domingo"){
        return false;
    }

    if(hourNumber < minHour || hourNumber > maxHour){
        return false;
    }

    return true;

}


function getDayNumber(janFirstDayNumber, yearDayNumber){
    if(yearDayNumber < 0 || yearDayNumber > 365){
        alert("Error en getDayNumber, yearDayNumber no válido. Día ingresado: " + yearDayNumber);
        return;
    }

    if(janFirstDayNumber < 0 || janFirstDayNumber > 6){
        alert("Error en getDayNumber, janFirstDayNumber no válido. Día ingresado: " + janFirstDayNumber);
        return;
    }

    let day =  janFirstDayNumber + (yearDayNumber % 7) ;
    if(day > 6){
        day = day-5;
    }
    return day;
}

function isBusinessHour(yearDayNumber, hourNumber){
    return businessHours(getDayNumber(0,yearDayNumber), hourNumber);
}