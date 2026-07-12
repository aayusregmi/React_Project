import React from 'react'
import Price from './Price';

const Production = ({idx , title , features}) => {
  const oldPrice = ["12,459" , "11,900" , "1,599" , "599"];
  const newPrice = ["8,999" , "9,199" , "899" , "278"]
  return (
    <div>
      <div className='bg-white h-45 w-50 text-sm rounded-tr-xl rounded-tl-xl'>
        <div className='text-center'>{title[idx]}</div>
        <br />
        <div className='px-5'>{features[idx].map((feature)=>
          <li>{feature}</li>
        )}</div>
      </div>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
  )
}

export default Production

