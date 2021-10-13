import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgPacman } from 'react-icons/cg'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

const Navbar = ({ authenticated, user, handleLogOut }) => {
  let unauthenticatedOptions
  if (!user) {
    unauthenticatedOptions = (
      <nav>
        <NavLink
          className=" 
        hover:text-blue-600
        transition-all mx-auto p-8"
          to="/"
        >
          Login
        </NavLink>
        <NavLink
          className=" 
        hover:text-pink-400
        transition-all mx-auto p-8 "
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className="text-gray-700 hover:text-pink-400 transition-all flex  bg-purple-200"
          to="/"
        >
          <CgPacman className="text-7xl sm:text-8xl" />
          <button class="text-md sm:text-xl font-bold tracking-widest p-1">
            TrakFlow
          </button>
        </NavLink>
      </nav>
    )
  }

  const authenticatedOptions = (
    <nav>
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
        className="text-gray-700 hover:text-pink-400 transition-all flex  bg-purple-200"
        to="/Dashboard"
      >
        <CgPacman className="text-7xl sm:text-8xl" />
        <button class="text-md sm:text-xl font-bold tracking-widest p-1">
          TrakFlow
        </button>
      </NavLink>
    </nav>
  )
  return (
    <div class="text-gray-600  bg-red-100 flex justify-between navbar">
      <nav class="flex  text-sm sm:text-xl">
        <NavLink
          className=" 
        
        hover:text-red-600 
        transition-all mx-auto p-8"
          to="/about"
        >
          About
        </NavLink>
        {authenticated && user ? authenticatedOptions : unauthenticatedOptions}
      </nav>
    </div>
  )
}
export default Navbar
