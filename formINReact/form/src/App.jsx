import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  console.log("re-render");

  return (
    <>
     <form>
      <input type="text" value={name} placeholder='Enter you name' onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <button>Submit</button>

     </form>
    </>
  )
}

export default App
