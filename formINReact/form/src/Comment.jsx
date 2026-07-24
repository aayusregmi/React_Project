import React from 'react'
import CommentForm from './commentForm';
import { useState } from 'react'

const Comment = () => {
  const [comment , setComment] = useState([{
    Username:"",
    Remark:"",
    Rating:""
  }])
   
  const showComment = (newComment) => {
    console.log("Entered to the function...");
    setComment((prev) => [...prev , newComment ])
  }

  return (
    <>
    <div className='text-black bg-gray-500 w-40 h-20'>
     {comment.map((cmnt , idx) =>
     <div key={idx}>
      <span>{cmnt.Username}</span>
      <span>{cmnt.Remark}</span>
      <span>{cmnt.Rating}</span>
     </div>
    )}
    </div>
    <CommentForm showComment={showComment} /></>
    
  )
}

export default Comment
