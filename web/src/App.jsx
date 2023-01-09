//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import '../src/styles/css/style.css'

import { THEME } from './styles/variables'

import axios from 'axios'

import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { useState, useEffect } from 'react'

function App() {

  const [pokemon, setPokemon] = useState("pikachu")
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

      console.log(res)

    } catch (err) {

      console.log(err)
    }
  }

  const handleChange = (event) => {

    setPokemon(event.target.value.toLowerCase())
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    getPokemon()

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

                <input className="search-container__input input" onChange={handleChange} type={"text"} placeholder="Search Here"></input>

                <button className="search-container__btn btn">Search</button>
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
