import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <body>
      <div className='content'>

        <Header />

        <Main />

        <Footer />
        
      </div>
    </body>
  )
}

export default App
