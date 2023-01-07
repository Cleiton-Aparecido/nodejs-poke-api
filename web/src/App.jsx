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

            {pokemonData.map((data) => {
                return (
                    <div className="pokecard" key={data}>
                        <div className='pokecard__display'>
                          <img src={data.sprites["front_default"]} className="pokecard__display--img"/>
                        </div>

                        <div className="pokecard__detail">

                            <section className='pokecard__detail--top'>
                                <h3 className='pokemon__name'>
                                  {data.name}
                                </h3>
                            </section>

                            <div className='pokecard__detail--center'>
                              <section className="pokecard__detail--left">
                                  <p className="pokecard__detail--paragraph">
                                      Type:
                                  </p>
                                  <p className="pokecard__detail--paragraph">
                                      Height:
                                  </p>
                                  <p className="pokecard__detail--paragraph">
                                      Weight:
                                  </p>
                                  <p className="pokecard__detail--paragraph">
                                      Number of Battles:
                                  </p>
                              </section>

                              <section className="pokecard__detail--right">
                                  <p className="pokecard__detail--paragraph">
                                      {pokemonType}
                                  </p>
                                  <p className="pokecard__detail--paragraph">
                                      {" "}{Math.round(data.height * 10)}cm
                                  </p>
                                  <p className="pokecard__detail--paragraph">
                                      {" "}{Math.round(data.weight / 10)} Kg
                                  </p>
                                  <p className="pokecard__detail--paragraph">
                                    {data.game_indices.length}
                                  </p>
                              </section>
                            </div>

                            

                            <section className='pokecard__detail--bottom'>
                                <h4>#{data.order}</h4>
                            </section>
                        </div>
                    </div>
                )
            })}
        </div>

        <Footer />
        
      </div>

  )
}

export default App
