import { useEffect, useState } from "react"
import { ListCard } from "../../components/ListCard/ListCard"

export function PokeList() {

    const [limit, setLimit] = useState("20")
    const [offSet, setOffset] = useState("0")
    const [pokeCount, setPokeCount] = useState("")
    const [pokemonResult, setPokemonResult] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonType, setPokemonType] = useState("")


    async function getPokeList(limit, offSet) {
        try {

            await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`)
                .then(response => (response.json()))
                .then((data) => {
    
                    setPokeCount(data.count)
                    setPokemonResult(data.results)
                    //setPokemonType(data.types[0].type.name)
    
                    console.log(data)
                })

        } catch(err) {

            console.log(err)
        }
    }

    async function getPokemonByURL(url) {
        try {

            await fetch(url)
                .then(response => (response.json()))
                .then((data) => {

                    console.log(data)
                    setPokemonData(data)
                })

        } catch(err) {

            console.log(err)
        }
    }


    useEffect(() => {
        getPokeList(limit, offSet)
    }, [])

    return (
        
        <div className="pokelist">


        

        </div>
    )
}