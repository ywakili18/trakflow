import React from 'react'
import Newticket from '../components/Newticket'
import Currenttickets from '../components/Currenttickets'
import { motion, AnimatePresence } from 'framer-motion'
const Dashboard = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: -300 }}
        transition={{ type: 'tween', duration: 0.5 }}
        className="justify-between"
      >
        {/* New Ticket */}
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: -300 }}
          transition={{ type: 'tween', duration: 0.5 }}
          className=""
        >
          <Newticket {...props} />
        </motion.div>
        {/* Current  */}
        <motion.div initial={{ y: 300 }} animate={{ y: 0 }} exit={{ y: -300 }}>
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <Currenttickets {...props} />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Dashboard
