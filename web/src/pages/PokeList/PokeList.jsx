import { useEffect, useState } from "react"
import { ListCard } from "../../components/ListCard/ListCard"

export function PokeList() {

    const [pokeURLs, setPokeURLs] = useState([])
    const [pokeData, setPokeData] = useState([])

    const [query, setQuery] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)

    const [pokeCount, setPokeCount] = useState()
    const [nextPage, setNextPage] = useState([])
    const [prevPage, setPrevPage] = useState([])

    async function connectAPI(query) {

        try {

            await fetch(query)
                .then(response => (response.json()))
                .then((data) => {

                    console.log(data)

                    setPokeURLs(data.results)

                    setPokeCount(data.count)

                    setNextPage(data.next)
                    setPrevPage(data.previous)
                })

        } catch(error) {

            console.log(error)
        }
    }

    const loadMorePokemons = () => {

        connectAPI(nextPage)
    }

    const loadLessPokemons = () => {

        connectAPI(prevPage)
    }

    const getPokemonID = (pokemonURL) => {

        return pokemonURL.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
    }

    async function getPokeData(url) {
        try {

            await fetch(url)
                .then(reponse => (reponse.json()))
                .then((data) => {

                    console.log(data)

                    return data
                })

        } catch(error) {

            console.log(error)
        }
    }

    useEffect(() => {
        connectAPI(query)
    }, [])

    return (
        
        <div className="pokelist">

            {pokeURLs.map((result) => (
                <section key={result.name}>
                    <h1>{result.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonID(result.url)}.png`} />
                    <h2>{result.url}</h2>
                </section>
            ))}

            <button onClick={loadLessPokemons}>Prev</button>
            <button onClick={loadMorePokemons}>Next</button>

        </div>
    )
}