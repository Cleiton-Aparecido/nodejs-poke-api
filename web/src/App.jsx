//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import '../src/styles/css/style.css'

import { THEME } from './styles/variables'

import axios from 'axios'

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
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    
      <div className='content'>

        <Header />

        <Main />

        <Footer />
        
      </div>

  )
}

export default App
