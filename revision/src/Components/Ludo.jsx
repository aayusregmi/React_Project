import React, { useState } from 'react'

const ludo = () => {
    const [moves , setMoves] = useState({
        Yellow : 0 ,
        Blue : 0 ,
        Green : 0 ,
        Red : 0 ,
    })
     
    const [click , setClick] = useState([""])

    const handleYellow = () =>
        {
          setMoves({
        ...moves , 
        Yellow : moves.Yellow + 1
    }
    )
      setClick([...click , "Yellow"])  
        } 

        

    const handleBlue = () => setMoves({
        ...moves , 
        Blue : moves.Blue + 1
    })

    const handleGreen = () => setMoves({
        ...moves , 
        Green : moves.Green + 1
    })

    const handleRed = () => setMoves({
        ...moves , 
        Red : moves.Red + 1
    })

  return (
    <div className='text-white w-screen h-screen flex justify-center items-center flex-col gap-2'>
     <p>{click}</p> 
      <p>Yellow : {moves.Yellow} </p>
      <button className='h-16 w-12 bg-amber-300' onClick={handleYellow}>+1</button>
      <p>Blue : {moves.Blue} </p>
      <button className='h-16 w-12 bg-blue-300' onClick={handleBlue}>+1</button>
      <p>Green : {moves.Green} </p>
      <button className='h-16 w-12 bg-green-300' onClick={handleGreen}>+1</button>
      <p>Red : {moves.Red} </p>
      <button className='h-16 w-12 bg-red-300' onClick={handleRed}>+1</button>
    </div>
  )
}

export default ludo
