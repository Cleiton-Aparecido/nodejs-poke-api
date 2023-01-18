//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import '../src/styles/css/style.css'

import randomId from "./utils/connectApi"

import { THEME } from './styles/variables'

import axios from 'axios'

import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { useState, useEffect, Component } from 'react'

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

      handleErrorReset()

    } catch(err) {

      handleError(err)
    }
  }

  const handleError = (err) => {
    console.log(err)
    searchBtn.style.backgroundColor = "red"
    searchBtn.innerText = "Not Found :/"

  }

  const handleErrorReset = () => {
    searchBtn.style.backgroundColor = "#77dd77"
    searchBtn.innerText = "Search"
  }

  const handleChange = (event) => {

    setPokemon(event.target.value.toLowerCase())
  }

  const handleSubmit = (event) => {

    const searchInput = document.querySelector(".search-container__input")

    event.preventDefault()

    searchInput.value = ""
    searchInput.focus()

    getPokemon()

  }

  const handleRandomPokemon = () => {
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

                <input className="search-container__input input" onChange={handleChange} type={"search"} results={5} placeholder="Search Here"></input>

                <section className='button-container'>

                  <button id='search-btn' className="button-container__btn-search search-btn btn" title='Search for a Pokémon'>Search</button>

                  <button id='random-btn' className='button-container__btn-random random-btn btn' title='Random Pokémon' onClick={handleRandomPokemon}>
                    <span className='random-btn__icon'></span>
                  </button>

                </section>

            </form>

        </div>

        {pokemonData.map((data) => {
            return (
                <Card

                  key={data.id}
                  id={data.id}
                  sprite={data.sprites["front_default"]}
                  name={data.name}
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
