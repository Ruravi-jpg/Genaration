var names = document.getElementsByClassName("name");
var images = document.getElementsByClassName("image");
var descriptions = document.getElementsByClassName("description");

var pokeNames = ["gengar", "eevee", "bulbasur"];


function fetchPokemon(pokename){
let url = 'https://pokeapi.co/api/v2/pokemon/' + pokename;
var poke;
fetch(url)
.then(respuesta => respuesta.json())
.then(pokemon => {
  poke = pokemon;
  console.log(poke);
})
.catch(err=>console.log(err))

console.log(poke);
return poke;
}



console.log(fetchPokemon(pokeNames[1]));