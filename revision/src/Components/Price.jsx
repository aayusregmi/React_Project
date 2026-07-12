import React from 'react'

const Price = ({oldPrice , newPrice}) => {
  return (
    <div className='bg-amber-400 w-full h-10 rounded-bl-2xl rounded-br-2xl px-12'>
      <span className='line-through'>{oldPrice}</span>
       &ensp;
      <span>{newPrice}</span>
    </div>
  )
}
export default Price

