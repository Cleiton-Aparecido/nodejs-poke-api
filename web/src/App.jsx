//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import '../src/styles/css/style.css'

import randomId from "./utils/connectApi"
import { handlePokeName } from './utils/nameHandler'
import { searchHandler } from './utils/searchHandler'

import axios from 'axios'

import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
//import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { useState, useEffect } from 'react'

function App() {

  // STATES
  const [pokemon, setPokemon] = useState(randomId())
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState("")

  const searchBtn = document.querySelector("#search-btn")

  const getPokemon = async () => {

    const toArray = []

    try {

      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)

      toArray.push(res.data)

      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray)

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
    
      <div className='content'>

        <Header />

        <div className="search-container">
            <img src="../../public/hero.png" className="search-container__hero"/>
            
            <form className="search-container__form" onSubmit={handleSubmit}>

                <input className="search-container__input input" onChange={handleChange} type={"search"} required minLength={3} maxLength={35} placeholder="Search Here"></input>

                <section className='button-container'>

                  <button id='search-btn' className="button-container__btn-search search-btn btn" title='Search for a Pokémon'>Search</button>

                  <button id='random-btn' className='button-container__btn-random random-btn btn' title='Random Pokémon' onClick={handleRandomPokemon}></button>

                </section>

            </form>

        </div>

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

        <Footer />
        
      </div>

  )
}

export default App
