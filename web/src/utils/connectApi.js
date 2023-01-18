export default function randomId() {

    const min = 1
    const max = 905

    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function getPokemon(pokemonName) {

    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => (response.json()))
            .then((data) => {
                console.log(data)
            })
}

function getItem(itemName) {

    fetch(`https://pokeapi.co/api/v2/item/${itemName}`)
        .then(response => (response.json()))
        .then((data) => {
            console.log(data)
        })
}

//getItem("master-ball")

let pokeId = randomId()

getPokemon(pokeId)