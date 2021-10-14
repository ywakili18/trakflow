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
    <div className="text-lg flex">
      <div className="border">
        <p className="p-5 text-center bg-pink-100 text-4xl text-gray-600 ">
          Open Tickets
        </p>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border bg-pink-50 p-5 w-screen">
            <p>Title: {ticket.ticketTitle}</p>
            <p>Ticket: {ticket.ticketDescription}</p>
            <p>Priority Level: {ticket.priority}</p>
            <p>Timestamp: {ticket.createdAt}</p>
            {/* <p>Comments: {ticket.ticketsAndComments}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Currenttickets
