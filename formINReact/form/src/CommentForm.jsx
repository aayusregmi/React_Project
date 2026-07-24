import { useState } from 'react'
import Comment from './Comment';


function CommentForm({showComment}) {
  const [info , setInfo] = useState({
    Username:"",
    Remark:"",
    Rating:""
  })

  const handleInput = (e) =>{
    const fieldName = e.target.name;
    const value = e.target.value;
   setInfo((prev) =>{
    prev[fieldName] = value
    return{
      ...prev
    }
   })
  }

  return (
    <>
    <Comment info ={info}/>
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      <div className="formSection">
        <form className='flex flex-col gap-2'>
         <input type="text" value={info.Username} name='Username' className='bg-amber-50 outline-none px-2' placeholder='Username' onChange={handleInput} />
         <textarea value={info.Remark} onChange={handleInput} placeholder='Remark' name="Remark" id="" className='bg-gray-500 outline-none px-2 '></textarea>
         <input onChange={handleInput} type="number" name='Rating' className='bg-blue-300 px-2' placeholder='Rating' min={1} max={5}/>
         <button className='bg-green-500 rounded-2xl w-20 mx-16'>
          Submit
         </button>
        </form>
      </div>
    </div>
    </>
    
  )
}
export default CommentForm