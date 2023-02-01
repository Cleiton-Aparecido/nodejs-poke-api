//import { useState } from 'react'
//import reactLogo from './assets/react.svg'

// CSS
import '../src/styles/css/style.css'

// COMPONENTS
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

// PAGES
import { Battle } from './pages/Battle/Battle'
import { Home } from './pages/Home/Home'
import { PokeInfo} from './pages/PokeInfo/PokeInfo'
import { PokeList } from './pages/PokeList/PokeList'



import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    
      <div className='content'>

        <Header
        
          logoURL={"../../public/logo_pokemon.png"}
          userPhotoURL={"../../public/avatar.jpg"}

        />

        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/pokelist' element={ <PokeList />} />
          <Route path='/battle' element={ <Battle />} />
          <Route path='/user/:id' />
          <Route path="/pokeinfo/:id" element={ <PokeInfo /> }  />
        </Routes>

        <Footer />
        
      </div>

  )
}

export default App
