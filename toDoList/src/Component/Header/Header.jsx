import React from 'react'
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className='w-full h-16 flex justify-center'>
      <div className='bg-gray-600 h-full w-2/3 flex justify-evenly items-center'>
              <NavLink to="/" className={({isActive})=>
                `${isActive ? "text-green-600 text-2xl" : "text-white"}`
              }>Home</NavLink>
              <NavLink to="/todolist" className={({isActive})=>
                `${isActive ? "text-green-600 text-2xl" : "text-white"}`
              }>To-do List</NavLink>
              <NavLink to="/github" className={({isActive})=>
                `${isActive ? "text-green-600 text-2xl" : "text-white"}`
              }>Github</NavLink>
              
      </div>
    </div>
  )
}

export default Header
