import { useState } from 'react'
import './App.css'
import userContextProvider from './Context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvider>
    <h1 className='text-black-400'>React with Aayus</h1>
    </userContextProvider>
  )
}

export default App
