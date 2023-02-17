//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import { useState, useEffect } from 'react'

// UTILS
import { handlePokeName } from '../../utils/nameHandler'
import { randomId } from '../../utils/pokeRandom'
import { searchHandler } from '../../utils/searchHandler'

// EXTERNAL
import axios from 'axios'

// COMPONENTS
import { Card } from '../../components/Card/Card'

export function Home() {

  // STATES
  const [pokemon, setPokemon] = useState(randomId())
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState("")

  const getPokemon = async () => {

    const toArray = []

    try {

      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)

      toArray.push(res.data)

      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray)

      //setCardType(typeHandler(pokemonType))

      console.log(res)

    } catch(err) {

      console.log(err)
    }
  }

  const searchInput = document.querySelector(".search-container__input")

  const handleChange = (event) => {

    setPokemon(searchHandler(event.target.value.toLowerCase()))
  }

  const handleSubmit = (event) => {

    event.preventDefault()

    searchInput.value = ""
    searchInput.focus()

    getPokemon()

  }

  const handleRandomPokemon = () => {

    searchInput.value = pokemon
    
    setPokemon(randomId())
  }

  useEffect(() => {
    
    getPokemon()
  }, [])

  return (
  
    <div className="search-container">
      
        <img src="/hero.png" className="search-container__hero"/>
        
        <form className="search-container__form" onSubmit={handleSubmit}>

            <input 
    
              className="search-container__input input" 
              onChange={handleChange} 
              type={"search"} 
              required minLength={3} 
              maxLength={35} 
              placeholder="Search Here" >

            </input>

            <section className='button-container'>

              <button 
                id='search-btn'
                className="button-container__btn-search search-btn btn" title='Search for a Pokémon' 
              >
                Search
              </button>

              <button 
              
                  id='random-btn' 
                  className='button-container__btn-random random-btn btn' title='Random Pokémon' 
                  onClick={handleRandomPokemon} >

              </button>

            </section>

        </form>

        {pokemonData.map((data) => {
            return (
              
                <Card
    
                  key={data.id}
                  id={data.id}
                  sprite={data.sprites["front_default"]}
                  name={handlePokeName(data.name)}
                  type={pokemonType}
                  height={data.height}
                  weight={data.weight}
                  battles={data.game_indices.length}
                  order={data.order}
    
                />
            )
        })}
    </div>

  )
}
