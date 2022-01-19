var names = ["Maria", "Antony", "Joy", "Juan"]

function addName(name){
    names.push(name);
}

addName("Ruravi");

console.log(names);


function existsOnArray(name){
    return (names.indexOf(name) != -1)
}


console.log(existsOnArray("Ruravi"));

var list2 = ["Joy", "Rodolfo", "Maria", "Juan"];

function getEquals(list){
    var newList = [];
    list.forEach(element => {
        if(existsOnArray(element)){
            newList.push(element);
        }
    });
        

    console.log(newList);
}


getEquals(list2);


function getLengthList(list){
    var newList = [];
    list.forEach(element => {
        newList.push(element.length);
    });

    console.log(newList);
}

getLengthList(names);

// false || (true && false);    false
// true || (11 + 12);           true
// (31 + 22) || true;           true
// true && (1 + 7);             true
// false && (3 + 4);            false
// (1 + 2) && true;             true
// (32 * 4) >= 129;             false
// false !== !true;             false
// true === 4;                  false
// false === (847 === '847');   true
// false === (887 == '887');    false
// (!true || (!(100 / 5) === 20) || ( (328 / 4) === 82)) || false;  true

function numberRange(num){
    if( 0 <= num && num <= 25){
        console.log("Esta entre 0 y 25");
    }else if( 26 <= num && num <= 100){
        console.log("Esta entre 26 y 100");
    }else if(num > 100){
        console.log("es mayor a 100");
    }else{
        console.log('Es menor a 0');
    }
}

numberRange(-500);