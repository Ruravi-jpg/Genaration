// Algorithm Design and Problem Solving - Advanced
// Write a program that takes in an array of numbers and returns the largest number in the list.
// Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.

var array = [2, 22, 6, 8, 1, 17];

function getLargestNumber() {
    var largestNumber = 0;

    for(var i = 1; i <= array.length; i++){
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    console.log("El número más grande es " + largestNumber);
}

getLargestNumber();

// Exercise #2
// Write a program to sort a list of numbers in descending order (from highest to lowest).
valor = numbers.sort(function(x,y){
    return y-x
    
    });
    console.log(valor);


// Exercise #1
// Open up a blank repl.it set to Javascript. Copy the code below into your workspace:

var arr = ["This", "is", "a", "sentence."];

function printOutString() {
    var result = '';

    for(var i = 0; i < arr.length; i++){
        result += arr[i] + ' ';
    }

    console.log(result);
}

printOutString();


// Exercise #2
// Write a function that:

// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

function doubleArray() {
    var firstArray = [1, 2, 3, 4, 5];  // [2,4,6,8,10]

    for (var i = 0; i < firstArray.length; i++){
        firstArray [i] = firstArray[i] * 2;
    }
    console.log(firstArray);
}

doubleArray();


// Exercise #3
// Write a program to compute the sum and product (multiplication) of an array of numbers. 
// Print out the sum and the product.

// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.


function sumProduct(){
    var array = [4, 5, 6 ,7, 8];
    var sum = 0; 
    var multiplication = 1;

    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
        multiplication = multiplication * array[i];
    }

    console.log("Suma: " + sum);
    console.log("Multiplicación: " + multiplication); 
}

sumProduct();

// Exercise 4
// Create a program that loops over the 2 arrays; 
// if there are any common courses print them out to the console.

    var student1Courses = ['Math', 'English', 'Programming'];
    var student2Courses = ['Geography', 'Spanish', 'Programming'];
        
    curso1 = student1Courses.sort();
    console.log(curso1);
        
    curso2 = student2Courses.sort();
    console.log(curso2);
        
        if (curso1[0] == curso2[0] || curso1[0] == curso2[1] || curso1[0] == curso2[2]){
            console.log(curso1[0]);
        } else if (curso1[1] == curso2[0] || curso1[1] == curso2[1] || curso1[1] == curso2[2]){
            console.log(curso1[1]);
        } else if (curso1[2] == curso2[0] || curso1[2] == curso2[1] || curso1[2] == curso2[2]){
            console.log(curso1[2]);
        } else {
            console.log("No hay cursos en común");
        }
// Exercise 5
/*For each of the exercises below, assume you are starting with the following people array.
var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to add "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/
    var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    //Write a command that prints out all of the people in the list.
        console.log(people)
    //Write the command to remove "Dani" from the array.
    var people1 = people.splice(1, 1);
        console.log(people)
    //Write the command to remove "Juan" from the array.
    var people1 = people.splice(2,1);
        console.log(people)
    //Write the command to add "Luis" to the front of the array.
    var people1 = people.splice(1,1)
    var people1 = people.unshift("Luis")
            console.log(people)
    //Write the command to add your name to the end of the array.
    var people1 = people.push("Abril")
            console.log(people)
    //Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
    //Creamos una función para iterar por los elementos del array hasta encontrar a Maria y salir del arreglo
    function itera(){ 
    if (people[0] == "Maria"){
        console.log("Exit");
    } else if (people[1] == "Maria"){
        console.log("Exit");
    } else if (people[2] == "Maria"){
        console.log("Exit");
    } else if (people[3] == "Maria"){
        console.log("Exit");
    } else {
        console.log(people);
    } return;
    }
    itera();

    console.log(people) 
    //Write the command that gives the indexOf where "Maria" is located.
    val = people.indexOf("Maria"); 
    console.log(val);

// SORTING
// Exercise #1
// Write a program to sort a list of names alphabetically.
function alfa(valor){
    console.log(valor=valor.sort())
    }
    alfa(["juan","luis","pedro","alma"]);

//Code Refactoring & Fixing Code
/* Exercise #1
Code and paste the code below into a repl.it (set to Javascript).
Make sure to run the program to understand the output.
Find ways to improve the code and make it clearer to understand.*/
function someFunction(list) {
    return list.length;
}

//Exercise #2
/* Copy and paste the code below into a repl.it (set to Javascript).
Make sure to run the program to understand what it currently outputs.
Write test cases and fix the code according to the expected output.
Output should be: Failed if they scored 6 or less Insufficient if they scored > 6 but less than 9. 
(9 included) Good if they scored > 9 but less than 14. 
(14 included) Excellent if they scored 15. 
Error if participants enter a negative number or a number outside the range supported (outside 0 - 15*/
    function gradeLabel(grade=7) {
        if (grade <= 6 && grade >= 0) {
            console.log('Failed');
        }
        if (grade > 6 && grade <= 9) {
            console.log('Insufficient');
        }
        if (grade > 9 && grade <= 14) {
            console.log('Good');
        }
        if (grade == 15) {
            console.log('Excellent');
        }
        if (grade < 0 || grade > 15) {
            console.log('Error, outside of bounds');
        }
    }
