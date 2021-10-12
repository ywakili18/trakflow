import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgPacman } from 'react-icons/cg'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
const Navbar = () => {
  return (
    <div class="text-gray-600 flex-col bg-white p-4">
      <nav class="flex justify-between text-sm sm:text-2xl ">
        <NavLink
          className="rounded-2xl text-gray-700 hover:text-pink-500 transition-all"
          to="/"
        >
          <CgPacman className="text-6xl sm:text-8xl" />
        </NavLink>

        <NavLink
          className=" 
        hover:text-pink-500
        transition-all mx-auto p-6 flex rounded-3xl"
          to="/dashboard"
        >
          Dashboard
          <MdOutlineDashboardCustomize className="text-lg sm:text-2xl sm:mt-1" />
        </NavLink>
        <NavLink
          className=" 
        hover:text-pink-500
        transition-all mx-auto p-6"
          to="/"
        >
          Login
        </NavLink>
        <NavLink
          className=" 
        hover:text-pink-500
        transition-all mx-auto p-6 "
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className=" 
        
        hover:text-pink-500 
        transition-all mx-auto p-6"
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  )
}
export default Navbar
