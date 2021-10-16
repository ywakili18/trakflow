import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgPacman } from 'react-icons/cg'
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = ({ authenticated, user, handleLogOut }) => {
  let unauthenticatedOptions
  if (!user) {
    unauthenticatedOptions = (
      <AnimatePresence>
        <motion.nav
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: -300 }}
          transition={{ type: 'tween', duration: 0.5 }}
          className="text-white flex navbar justify-evenly"
        >
          <div className="flex text-lg sm:text-3xl md:text-4xl">
            <NavLink
              className="
              hover:bg-purple-200
              hover:text-blue-400
              transition-all flex p-2 underline "
              to="/login"
            >
              <span class="mt-2 sm:mt-5">login</span>
            </NavLink>
            <NavLink
              className=" 
              hover:bg-green-200
          hover:text-purple-500
          transition-all flex p-2 underline "
              to="/register"
            >
              <span class="mt-2 sm:mt-5">register</span>
            </NavLink>
            <NavLink
              className=" 
              hover:bg-red-200
              hover:text-purple-500
              transition-all flex p-2 underline "
              to="/about"
            >
              <span class="mt-2 sm:mt-5">about</span>
            </NavLink>
          </div>

          <div>
            <NavLink
              className="hover:text-indigo-400 transition-all flex text-pink-100"
              to="/login"
            >
              <CgPacman className="text-4xl sm:text-7xl lg:text-8xl mt-4 sm:mt-4 lg:mt-1" />
              <button
                className="mr-4 
                text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-400 to-pink-500 
                text-2xl sm:text-4xl lg:text-5xl mt-2 lg:mt-0"
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
    <motion.nav
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: 'tween', duration: 0.5 }}
      className=" text-white flex navbar justify-evenly"
    >
      <div className="flex text-lg sm:text-3xl md:text-4xl">
        <NavLink
          className=" 
          hover:bg-green-200
          hover:text-purple-500
          transition-all flex p-2 underline "
          to="/dashboard"
        >
          <span class="mt-2 sm:mt-5">dashboard</span>
        </NavLink>
        <NavLink
          className=" 
          hover:bg-purple-200
          hover:text-blue-400
          transition-all flex p-2 underline  "
          onClick={handleLogOut}
          to="/login"
        >
          <span class="mt-2 sm:mt-5">logout</span>
        </NavLink>
        <NavLink
          className=" 
          hover:bg-red-200
          hover:text-purple-500
          transition-all flex p-2 underline "
          to="/about"
        >
          <span class="mt-2 sm:mt-5">about</span>
        </NavLink>
      </div>

      <div>
        <NavLink
          className="hover:text-pink-700 transition-all flex text-pink-100"
          to="/dashboard"
        >
          <CgPacman className="text-4xl sm:text-7xl lg:text-8xl mt-4 sm:mt-4 lg:mt-1" />
          <button
            className="mr-4 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 to-pink-500 
            text-2xl sm:text-4xl lg:text-5xl mt-2 lg:mt-0"
          >
            trakflow
          </button>
        </NavLink>
      </div>
    </motion.nav>
  )
  return (
    <div>
      {authenticated && user ? authenticatedOptions : unauthenticatedOptions}
    </div>
  )
}
export default Navbar
