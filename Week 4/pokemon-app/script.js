let index = 1;

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
        const pokemonImgFront = document.getElementById('poke-img-front') 
        pokemonImgFront.src = pokemonData.sprites.front_default
        const pokemonImgBack = document.getElementById('poke-img-back') 
        pokemonImgBack.src = pokemonData.sprites.back_default

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
        throw new Error("WHAT DID YOU DO")
    }

}

fetchPokemon(1)

const nextButton = document.getElementById('next-button')
nextButton.addEventListener('click', () => {
    index++
    fetchPokemon(index)
})

const pokemonInput = document.getElementById('pokemon-input')
const onSubmit = () => {
    let pokeName = pokemonInput.value
    console.log(pokeName)
    fetchPokemon(pokeName)
}







