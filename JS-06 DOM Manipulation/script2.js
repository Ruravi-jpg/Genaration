function test(){
    // Write the code that will do the following:


// Select the section with a container id without using querySelector.
let seccion = document.getElementById("container");

// Select the section with a container id using querySelector.
let seccionQuery = document.querySelector("#container");


// Select all the items list with a class of "second".
let listasSecond = document.getElementsByClassName("second");
console.log(listasSecond);


// Select a list item with a class of third, but only the list item inside of the ol tag.

let oltag = document.getElementsByTagName("ol")[0];
let olthird = oltag.getElementsByClassName("third")[0];
console.log(olthird.innerHTML);


//let titulo = document.getElementById("titulo");
// titulo.innerHTML = "Hola!"
// Give the text "Hello!" to the section with a container id.
seccion.innerHTML +="Hola";

let footer = document.getElementsByClassName("footer")[0];
// Add the main class to the div with a footer class.
footer.classList.add("main");
// Remove the main class on the div with a
let footer = document.getElementsByClassName("footer")[0];
// Add the main class to the div with a footer class.
footer.classList.add("main");
// Remove the main class on the div with a footer class.
footer.classList.remove("main");
// Create a new li element.
// Give the li the text "four".
// Append the li to the ul element.
let ul = seccion.getElementsByTagName("ul")[0]; 

ul.innerHTML+= "<li>Four</li>";

}