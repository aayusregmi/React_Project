import { useState } from 'react'
import './App.css'

function App() {
  const[info , setInfo]  = useState({
    name : "",
    userName : "",
  })
  console.log("re-render");
     
  const handleInputChange = (e) =>{
  const field = e.target.name
  const value = e.target.value
  setInfo((prev) =>{
    prev[field] = value
    return{
      ...prev
    }
  })
  }
  
  return (
    <div className='bg-gray-600 flex flex-col h-50 w-60'>
     <form>
      <input className='bg-white ' value={info.name} name='name' type="text"  placeholder='Enter your name' onChange={handleInputChange}/>
      <input className='bg-white' value={info.userName} name='userName' type="text"  placeholder='Enter your Username' onChange={handleInputChange}/>
      <button>Submit</button>
     </form>
    </div>
  )
}

export default App
