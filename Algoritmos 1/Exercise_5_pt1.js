

function printRes(){
    console.log(tasks());
}



function tasks(){
    var tasks = parseInt(prompt("Ingresa la cantidad de tareas que completaste"));
    if(tasks >= 0 && tasks <= 15){
        if(tasks < 16){
            if(tasks < 15){
                if(tasks < 10){
                    if(tasks < 7){
                        return "**Failed**" + " With " + tasks + " tasks";
                    }

                    return "**Insufficient" + " With " + tasks + " tasks";
                }

                return "**Good**" + " With " + tasks + " tasks";
            }

            return "**Excelent**" + " With " + tasks + " tasks";
        }
    }else{
        return "**Error**";
    }
}
