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
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: -300 }}
          transition={{ type: 'tween', duration: 0.5 }}
          className="text-white  flex navbar justify-around text-lg sm:text-3xl"
        >
          <div className="flex">
            <NavLink
              className=" 
        hover:bg-red-200
        hover:text-purple-500
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
    <motion.nav
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: 'tween', duration: 0.5 }}
      className=" text-white flex navbar justify-around text-lg sm:text-2xl"
    >
      <div className="flex text-lg sm:text-3xl mt-5">
        <NavLink
          className=" 
          hover:bg-red-200
        hover:text-purple-500
        transition-all flex p-2 underline "
          to="/dashboard"
        >
          dashboard
        </NavLink>
        <NavLink
          className=" 
          hover:bg-red-200
          hover:text-purple-500
          transition-all flex p-2 underline "
          onClick={handleLogOut}
          to="/login"
        >
          logout
        </NavLink>
        <NavLink
          className=" 
          hover:bg-red-200
          hover:text-purple-500
          transition-all flex p-2 underline "
          to="/about"
        >
          about
        </NavLink>
      </div>

      <div>
        <NavLink
          className="hover:text-pink-700 transition-all flex text-pink-100"
          to="/dashboard"
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
  )
  return (
    <div>
      {authenticated && user ? authenticatedOptions : unauthenticatedOptions}
    </div>
  )
}
export default Navbar
