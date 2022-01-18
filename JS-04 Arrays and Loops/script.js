var names = ["Sofia", "David", "Juan"];

names.push("Sara");
names.push("Augustin");
names.shift();

console.log(names);

var num = names.indexOf("David");

names.splice(num+1,0,"Renata")

console.log(names);


for(let i = 1; i < 6 ; i++){
    for(let j = 1; j <= i; j++){
        console.log("*");
    }
}


var x = 5;

while(x >= 0){
    console.log(x);
    x -= 0.5;
}


for(let i = 0; i <= 100; i++){
    if((i % 2) != 0){
        console.log(i);
    }
}


var n = 6;

for(let i = 1; i <= n; i++){
    console.log("["+i+"]");
}

var num = 5;
var resutl = 0;
for(let i = 1; i <= num; i++){
    resutl += i;
}

console.log(resutl);