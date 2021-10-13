import React from 'react'
import Newticket from '../components/Newticket'
import Currenttickets from '../components/Currenttickets'
const Dashboard = () => {
  return (
    <div class="bg-blue-50 flex">
      <header class="border h-screen w-2/5 text-2xl text-center">
        Dashboard
      </header>
      <Newticket />
      <Currenttickets />
    </div>
  )
}

export default Dashboard
