export function getPokeID(pokeURL) {

    return pokeURL.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
}