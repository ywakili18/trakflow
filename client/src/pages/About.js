import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ type: 'tween' }}
        className="text-blue-900 p-20 flex-col text-center"
      >
        <p class="text-2xl sm:text-3xl mt-20">Social Media Links:</p>
        <div className="flex flex-col border-4 mt-20 mx-auto">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://linkedin.com/in/youseffect"
          >
            <button
              class="
          text-3xl sm:text-4xl 
              hover:text-purple-600 
              focus:ring  transition-all"
            >
              <FiLinkedin className="ml-4 mt-2" />
            </button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/ywakili18/trakflow"
          >
            <button
              class="
          text-3xl sm:text-4xl 
              hover:text-purple-600 
              focus:ring  transition-all"
            >
              <FiGithub className="ml-4 mt-2" />
            </button>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/youseffect/"
          >
            <button
              class="
              hover:text-purple-600 
              focus:ring  transition-all"
            >
              <p className="underline text-3xl sm:text-4xl mt-5">
                youseffect.com{''}
              </p>
            </button>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default About
