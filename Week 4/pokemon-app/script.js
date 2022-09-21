let index = 1;

const setImgs = (pokemonData) => {
    const pokemonImgFront = document.getElementById('poke-img-front') 
    pokemonImgFront.src = pokemonData.sprites.front_default
    const pokemonImgBack = document.getElementById('poke-img-back') 
    pokemonImgBack.src = pokemonData.sprites.back_default

}

const fetchPokemon = async (pokemonIndex) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`) //Get data
        const pokemonData = await response.json() //JSONify
        console.log(pokemonData)
        
        //Title
        const pokemonName = document.getElementById('pokemon-name')
        pokemonName.textContent = pokemonData.name
        pokemonName.style.textTransform = "capitalize";
        //Imgs
        setImgs(pokemonData)

        //Moves List
        const moveList = document.getElementById("move-list")

        //Clear list
        moveList.innerHTML = ""

        for(let i = 0; i<5; i++){
            const moveName = pokemonData.moves[i].move.name.replace('-', ' ')
            const li = document.createElement('li')
            li.textContent = moveName
            li.style.textTransform = "capitalize"
            moveList.append(li)
        }
        index = pokemonData.id

    } catch {
        const pokemonName = document.getElementById('pokemon-name')
        pokemonName.textContent = "Not Found"
        const moveList = document.getElementById("move-list")
        moveList.innerHTML = ""

    }
}

fetchPokemon(1)

const nextButton = document.getElementById('next-button')
nextButton.addEventListener('click', () => {
    index++
    fetchPokemon(index)
})

let form = document.getElementById('pokemon-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let pokemon = e.target[0].value
    fetchPokemon(pokemon);
})





