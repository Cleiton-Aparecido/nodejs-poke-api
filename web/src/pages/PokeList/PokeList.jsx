import { useEffect, useState } from "react"
import { ListCard } from "../../components/ListCard/ListCard"

import { handlePokeName } from "../../utils/nameHandler"

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

    useEffect(() => {
        connectAPI(query)
    }, [])

    return (
        
        <section className="pokelist">

            <header className="pokelist__header">
                <nav className="pokelist__nav">
                    <a className="pokelist__nav__link">link</a>
                </nav>
            </header>

            <main className="pokelist__main">

                {pokeURLs.map((result) => (

                    <article className="pokelist__card" key={result.name}>
                        <div className="pokelist__card__content">

                            <img className="
                            pokelist__card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonID(result.url)}.png`} />

                            <h2 className="pokelist__card__title">
                                {handlePokeName(result.name)}
                            </h2>
                        </div>
                    </article>

                ))}
                        
            </main>
                

            <aside className="page-controls pokelist__controls">
                <button className="btn page-controls__btn pokelist__btn" onClick={loadLessPokemons}>Prev</button>
                <button className="btn page-controls__btn pokelist__btn" onClick={loadMorePokemons}>Next</button>
            </aside>

        </section>
    )
}