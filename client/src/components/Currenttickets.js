import React, { useEffect, useState } from 'react'
import Client from '../services/api'
const Currenttickets = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    async function getTickets() {
      const res = await Client.get('/tickets')
      console.log(res)
      setTickets(res.data)
    }
    getTickets()
  }, [])
  return (
    <div>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <h3>Title: {ticket.ticketTitle}</h3>
            <h3>Description: {ticket.ticketDescription}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Currenttickets
