import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgPacman } from 'react-icons/cg'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = ({ authenticated, user, handleLogOut }) => {
  let unauthenticatedOptions
  if (!user) {
    unauthenticatedOptions = (
      <AnimatePresence>
        <motion.nav
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className=" text-white  flex navbar justify-around text-2xl"
        >
          <div className="flex">
            <NavLink
              className=" 
        hover:bg-indigo-800
        hover:text-purple-300
        transition-all  p-8 underline"
              to="/login"
            >
              login
            </NavLink>
            <NavLink
              className=" 
              hover:bg-indigo-800
              hover:text-purple-300
        transition-all  p-8 underline"
              to="/register"
            >
              register
            </NavLink>
            <NavLink
              className=" 
        
              hover:bg-indigo-800
              hover:text-purple-300
        transition-all  underline p-8"
              to="/about"
            >
              about
            </NavLink>
          </div>

          <div>
            <NavLink
              className="hover:text-pink-700 transition-all flex text-pink-100"
              to="/login"
            >
              <CgPacman className="text-7xl sm:text-8xl" />
              <button
                className="mr-4 
            text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 text-3xl"
              >
                trakflow
              </button>
            </NavLink>
          </div>
        </motion.nav>
      </AnimatePresence>
    )
  }

  const authenticatedOptions = (
    <nav className="flex navbar  justify-between text-2xl">
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
          to="/login"
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
        <NavLink className=" transition-all flex text-gray-500" to="/dashboard">
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
