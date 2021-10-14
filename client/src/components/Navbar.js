import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgPacman } from 'react-icons/cg'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

const Navbar = ({ authenticated, user, handleLogOut }) => {
  let unauthenticatedOptions
  if (!user) {
    unauthenticatedOptions = (
      <nav className="text-gray-900 flex  bg-pink-50 navbar justify-between text-2xl">
        <div className="flex">
          <NavLink
            className=" 
        hover:text-indigo-400
        transition-all  p-8"
            to="/"
          >
            Login
          </NavLink>
          <NavLink
            className=" 
        hover:text-pink-400
        transition-all  p-8 "
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className=" 
        
        hover:text-red-600 
        transition-all p-8"
            to="/about"
          >
            About
          </NavLink>
        </div>

        <div>
          <NavLink
            className="hover:text-pink-600 transition-all flex text-gray-500"
            to="/"
          >
            <CgPacman className="text-7xl sm:text-8xl" />
            <button className="mr-4">TrakFlow</button>
          </NavLink>
        </div>
      </nav>
    )
  }

  const authenticatedOptions = (
    <nav className="text-gray-900 flex  bg-pink-50 navbar justify-between text-2xl">
      <div className="flex">
        <NavLink
          className=" 
        hover:text-yellow-600
        transition-all mx-auto p-8 flex "
          to="/dashboard"
        >
          Dashboard
          <MdOutlineDashboardCustomize className="text-lg sm:text-2xl sm:mt-1" />
        </NavLink>
        <NavLink
          className=" 
        hover:text-blue-600
        transition-all mx-auto p-8"
          onClick={handleLogOut}
          to="/"
        >
          Logout
        </NavLink>
        <NavLink
          className=" 
        
        hover:text-red-600 
        transition-all mx-auto p-8"
          to="/about"
        >
          About
        </NavLink>
      </div>

      <div>
        <NavLink
          className="hover:text-pink-600 transition-all flex text-gray-500"
          to="/dashboard"
        >
          <CgPacman className="text-7xl sm:text-8xl" />
          <button className="mr-4">TrakFlow</button>
        </NavLink>
      </div>
    </nav>
  )
  return (
    <div>
      {authenticated && user ? authenticatedOptions : unauthenticatedOptions}
    </div>
  )
}
export default Navbar
