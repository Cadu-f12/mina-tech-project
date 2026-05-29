import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {Home} from './pages/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Home />
      
      </main>
      
      <Footer />
    </>
  )
}

export default App
