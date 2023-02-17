// LIBS
import { useEffect, useState } from "react"

// COMPONENTS
import { InnerHeader } from "../../components/InnerHeader/InnerHeader"
import { ListCard } from "../../components/ListCard/ListCard"
import { PaginationMenu } from "../../components/PaginationMenu/PaginationMenu"

// UTILS
import { handlePokeName } from "../../utils/nameHandler"

export function PokeList() {

    const [pokeURLs, setPokeURLs] = useState([])
    const [isLoaded, setIsloaded] = useState(false)

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

                    setIsloaded(true)
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

            <InnerHeader styleClass={"pokelist__header"} />       

            <main className="pokelist__main">

                {isLoaded 
                
                ? 

                pokeURLs.map((result) => {

                    const id = getPokemonID(result.url)

                    return (

                        <ListCard 
                        
                            key={id}
                            id={id}
                            name={handlePokeName(result.name)}
                        
                        />
                    )

                })

                : 

                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>

                }
                        
            </main>

            

            <PaginationMenu
            
                extraStyle={"pokelist__controls"}
                nextFunction={loadMorePokemons}
                prevFunction={loadLessPokemons}
            
            />

        </section>
    )
}