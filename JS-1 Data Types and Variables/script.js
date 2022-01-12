
console.log("Using false");

var booleanFalse = false;

console.log(Number(booleanFalse));

console.log(String(booleanFalse));

console.log(Boolean(booleanFalse));

console.log("");
console.log("Using true");

var booleanTrue = true;

console.log(Number(booleanTrue))

console.log(String(booleanTrue));

console.log(Boolean(booleanTrue));

console.log("");
console.log("Using 0");

var zero = 0;

console.log(Number(zero));

console.log(String(zero));

console.log(Boolean(zero));



// ejercicio con 1


console.log("");
console.log("Using 1");

var x = 1;

var intBool = Number(x);

console.log(intBool);

var stringBool = String(x);

console.log(stringBool);

var boolBoolean = Boolean(x);

console.log(boolBoolean);

// ejercicio con "0"

console.log("");
console.log("Using '0'");

var y = "0";

var intBool = Number(y);

console.log(y);

var stringBool = String(y);

console.log(stringBool);

var boolBoolean = Boolean(y);

console.log(boolBoolean);

// ejercicio con "000"

console.log("");
console.log("Using '000'");

var z = "000";

var intBool = Number(z);

console.log(z);

var stringBool = String(z);

console.log(stringBool);

var boolBoolean = Boolean(z);

console.log(boolBoolean);



console.log("");
console.log("Using '1'");

var x="1";
var y= Number(x);
console.log(y);
console.log(typeof(y));

var x1="1";
var y1= String(x1);
console.log(y1);
console.log(typeof(y1));

var x3="1";
var y3= Boolean(x3);
console.log(y3);
console.log(typeof(y3));

var x4="NaN";
var y4= Number(x4);
console.log(y4);
console.log(typeof(y4));

var x5="NaN";
var y5= String(x5);
console.log(y5);
console.log(typeof(y5));

var x6="NaN";
var y6= Boolean(x6);
console.log(y6);
console.log(typeof(y6));

var x7="Number.POSITIVE_IFINITY";
var y7= Number(x7);
console.log(y7);
console.log(typeof(y7));

var x8="Number.POSITIVE_IFINITY";
var y8= String(x8);
console.log(y8);
console.log(typeof(y8));

var x9="Number.POSITIVE_IFINITY";
var y9= Boolean(x9);
console.log(y9);
console.log(typeof(y9));


//Ejercicio -Infinity

console.log("");
console.log("Using -infitity");
var x = Number.NEGATIVE_INFINITY;


var number = Number(x);

console.log(number);

var stringBool = String(x);

console.log(stringBool);

var bolean = Boolean(x);

console.log(bolean);

//Ejercicio ""
console.log("");
console.log("Using ''");
var y = "";
var number = Number(y);

console.log(number);

var stringBool = String(y);

console.log(stringBool);

var bolean = Boolean(y);

console.log(bolean);

//Ejercicio "20"

console.log("");
console.log("Using '20'");
var z = "20";


var number = Number(z);

console.log(number);

var stringBool = String(z);

console.log(stringBool);

var bolean = Boolean(z);

console.log(bolean);


var val1="Twenty" ,val2= null ,val3=undefined;

console.log("");
console.log("Using 'Twenty'");

console.log(Number(val1))
console.log(String(val1))
console.log(Boolean(val1))

console.log("");
console.log("Using null");

console.log(Number (val2))
console.log(String (val2))
console.log(Boolean(val2))

console.log("");
console.log("Using undefined");

console.log(Number(val3))
console.log(String(val3))
console.log(Boolean(val3))