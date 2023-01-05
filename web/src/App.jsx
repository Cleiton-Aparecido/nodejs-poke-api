//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import '../src/styles/css/style.css'

import { THEME } from './styles/variables'

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    
      <div className='content'>

        <Header />

        <Main />

        <Footer />
        
      </div>

  )
}

export default App
