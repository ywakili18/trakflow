import React from 'react'
import Newticket from '../components/Newticket'
import Currenttickets from '../components/Currenttickets'
import { motion, AnimatePresence } from 'framer-motion'
const Dashboard = (props) => {
  return (
    <AnimatePresence>
      <motion.div className="">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
          transition={{ type: 'spring', duration: 2 }}
          className=""
        >
          <Newticket {...props} />
        </motion.div>

        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ type: 'spring', duration: 2 }}
          className="bg-pink-100"
        >
          <Currenttickets {...props} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Dashboard
