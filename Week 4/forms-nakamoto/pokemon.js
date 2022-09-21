import fetch from "node-fetch"

//Fetch request with .then/.catch
fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(res => res.json())
    .then(response => {
        console.log(response)
    }).catch(error => console.log(error))


//Fetch request with async/wait
const fetchPokemon = async () => {
    try {
        const response = await fetch()
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

fetchPokemon()
