import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
 const [color , setColor] = useState("yellow")

  return(
    <div className='w-full h-screen flex flex-wrap justify-center' style={{
      backgroundColor : color
    }}>
      <div className='bg-white flex flex-wrap absolute bottom-3 rounded-xl gap-4 text-white justify-around w-[90%] h-16 items-center'>
        <button className = "rounded-xl w-16 px-2" onClick={()=>{
          setColor("red")
        }} style={{
          backgroundColor : "red" 
        }}>Red</button>

        <button className = "rounded-xl w-16 px-2" onClick={()=>{
          setColor("black")
        }} style={{
          backgroundColor : "black" 
        }}>Black</button>

        <button className = "rounded-xl w-16 px-2" onClick={()=>{
          setColor("green")
        }} style={{
          backgroundColor : "green" 
        }}>Green</button>

        <button className = "rounded-xl w-16 px-2" onClick={()=>{
          setColor("blue")
        }} style={{
          backgroundColor : "blue" 
        }}>Blue</button>

        <button className = "rounded-xl w-16 px-2" onClick={()=>{
          setColor("cyan")
        }} style={{
          backgroundColor : "cyan" 
        }}>Cyan</button>

      </div>

    </div>
  )

}

export default App
