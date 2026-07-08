import React from 'react'
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className='w-full h-16 flex justify-center'>
      <div className='bg-gray-600 h-full w-2/3 flex justify-center items-center'>
            <div>

              <NavLink to="/">Home</NavLink>
              <NavLink to="/todolist">To-do List</NavLink>

              </div>
      </div>
    </div>
  )
}

export default Header
