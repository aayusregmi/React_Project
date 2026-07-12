import React from 'react'
import Production from './Production'
import Price from './Price'

const ProductionTab = () => {
  const title = ["Logictech MX Master 3S" , "Apple Pencil(2nd Gen)" , "Zebronics zeb-Transformer" , "Portonics Toad 23 Wireless Mouse"]
  const feature = [
    ["8,000 DPI" , "5 Programmable Buttons"] ,
    ["Intuitive touch surface" , "Designed for ipad Pro"],
    ["Intuitive touch surface" , "Designed for iPad Pro"],
    ["Wireless Mouse 2.4GHz" , "Optical Orientation"]
  ]
  return (
    <div className='bg-gray-500 min-h-60 w-full relative flex justify-center items-center flex-wrap top-20 gap-3'>
      <Production idx ={0} title={title} features={feature}/>
      <Production idx ={1} title={title} features={feature} />
      <Production idx ={2} title={title} features={feature}/>
      <Production idx ={3} title={title} features={feature}/>
    </div>
  )
}

export default ProductionTab

