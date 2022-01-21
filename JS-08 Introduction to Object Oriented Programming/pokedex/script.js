


document.getElementById('send').addEventListener("click", searchPokemon);

function searchPokemon(){
    var pokemon = document.getElementById("pokemon").value;
fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
.then(response => response.json())
.then(pokemon2 => {
showPokemon(pokemon2);
})
.catch(err=>console.log(err))
}


function showPokemon(pokemon){
    console.log(pokemon);
    let image = document.getElementById("pokeimg");
    let name = document.getElementById("name");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");

    image.src = pokemon.sprites.front_default;
    name.innerHTML = pokemon.name;
    height.innerHTML = "Altura " + pokemon.height;
    weight.innerHTML = "Peso " + pokemon.weight;
}