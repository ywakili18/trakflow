import React from 'react'
import Newticket from '../components/Newticket'
import Currenttickets from '../components/Currenttickets'
import { motion, AnimatePresence } from 'framer-motion'
const Dashboard = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ type: 'tween' }}
        className="flex justify-between"
      >
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'tween' }}
          className=""
        >
          <Newticket {...props} />
        </motion.div>
        <motion.div initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: 300 }}>
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween' }}
          >
            <Currenttickets {...props} />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Dashboard
