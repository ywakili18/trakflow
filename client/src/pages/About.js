import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: -300 }}
        transition={{ type: 'tween' }}
        className="text-gray-700 p-20 flex-col text-center  mt-40"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'tween', delay: 0.5 }}
          className="flex-col"
        >
          {/* Title */}
          <p
            class="
          text-sm sm:text-3xl text-center
           mx-auto 
          font-bold"
          >
            Check out the repo, follow me on LinkedIn and
            <span
              className="text-transparent bg-clip-text mt-10
            bg-gradient-to-r from-blue-300 to-pink-500 ml-3 font-bold"
            >
              site
            </span>{' '}
            below!
          </p>
          {/* Icons container */}
          <div class="flex justify-evenly mx-auto">
            {/* Linkedin */}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://linkedin.com/in/youseffect"
            >
              <button
                class="
                text-4xl sm:text-6xl 
                hover:text-purple-600 
                focus:ring  transition-all p-10"
              >
                <FiLinkedin />
              </button>
            </a>
            {/* Github */}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ywakili18/trakflow"
            >
              <button
                class="
          text-4xl sm:text-6xl 
              hover:text-purple-600 
              focus:ring  transition-all p-10"
              >
                <FiGithub />
              </button>
            </a>
            {/* Personal site */}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.youseffect.com/"
            >
              <button
                class="
              hover:text-purple-600 
              focus:ring transition-all 
              underline text-xl sm:text-4xl 
              p-4 mt-7"
              >
                youseffect.com
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default About
