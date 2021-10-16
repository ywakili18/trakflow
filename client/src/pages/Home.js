import React from 'react'
import { useHistory } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
const Home = () => {
  const history = useHistory()
  return (
    <motion.div
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      exit={{ y: -300 }}
      transition={{ type: 'tween' }}
      class="home h-screen text-white text-4xl"
    >
      {/* text container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'tween', delay: 0.5 }}
      >
        <div class="flex">
          <h1
            class=" text-transparent bg-clip-text mt-10
            bg-gradient-to-r from-blue-300 to-pink-500 ml-3 text-7xl font-bold"
          >
            Trakflow
          </h1>
        </div>{' '}
        <div class="mt-10 p-5 text-red-400">
          <p>A simple bug tracker application.</p>
          <p class="mt-2 sm:mt-0">Made to solve your problems, a bit easier.</p>
          <button
            className="border-2 
          text-2xl bg-blue-200
          text-white rounded-2xl p-4 
          hover:bg-purple-200 
          hover:text-pink-400 mt-10"
            onClick={function handleClick(e) {
              history.push(`/login`)
            }}
          >
            Login
          </button>
          <button
            className="border-2 
          text-2xl bg-pink-200
          text-white rounded-2xl p-4 
          hover:bg-purple-200 
          hover:text-pink-400 mt-10 ml-5"
            onClick={function handleClick(e) {
              history.push(`/register`)
            }}
          >
            New to Trakflow? Sign up here!
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
