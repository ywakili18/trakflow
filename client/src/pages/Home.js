import React from 'react'
import { useHistory } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
const Home = () => {
  const history = useHistory()
  return (
    <AnimatePresence>
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
          transition={{ type: 'tween', delay: 0.7 }}
        >
          <div className="flex">
            <h1
              className=" text-transparent bg-clip-text mt-10
            bg-gradient-to-r from-blue-300 to-pink-500 ml-3 text-7xl font-bold"
            >
              Trakflow
            </h1>
          </div>{' '}
          <div className="mt-10 p-5 text-red-400 text-2xl md:text-4xl font-bold">
            <p>A simple bug tracker application.</p>
            <p className="mt-2 sm:mt-0">
              Made to solve your problems, a bit easier.
            </p>
            {/* LOGIN-BUTTON */}
            <div class="flex mt-10 text-base sm:text-2xl">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 
               bg-blue-200
              text-white rounded-2xl p-2 sm:p-4
              hover:bg-purple-200 
              hover:text-pink-400"
                onClick={function handleClick(e) {
                  history.push(`/login`)
                }}
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 
          bg-pink-200
          text-white rounded-2xl p-2 sm:p-4
          hover:bg-purple-200 
          hover:text-pink-400 ml-5"
                onClick={function handleClick(e) {
                  history.push(`/register`)
                }}
              >
                New to Trakflow? Sign up here!
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Home
