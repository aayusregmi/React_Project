import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     
     <Footer/>
    </>
  )
}

export default App
