import React from 'react'
import Newticket from '../components/Newticket'
import Currenttickets from '../components/Currenttickets'
import { motion, AnimatePresence } from 'framer-motion'
const Dashboard = (props) => {
  return (
    <AnimatePresence>
      <motion.div className="">
        {/* <header class="border h-screen w-2/5 text-2xl text-center">
        Dashboard
      </header> */}
        <Newticket {...props} />
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="bg-pink-100"
        >
          <Currenttickets {...props} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Dashboard
