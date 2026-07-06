import React from 'react'

const Header = () => {
  return (
    <div className='bg-white w-full h-16 flex justify-center'>
      <div className='bg-gray-600 h-full w-2/3 flex justify-center items-center'>
            <ul className='flex flex-row gap-9 md:justify-around'>
                <li>Home</li>
                <li>To-Do List</li>
            </ul>
      </div>
    </div>
  )
}

export default Header
