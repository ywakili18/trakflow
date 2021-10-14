import React, { useEffect, useState } from 'react'
import Client from '../services/api'
const Currenttickets = (props) => {
  const [tickets, setTickets] = useState([])

  // I need to add a edit button, which will conditionally render a form to update a tickets"
  const [updateTicket, setUpdateTicket] = useState({
    ticketTitle: '',
    ticketDescription: '',
    priority: 0,
    userId: props.user.id
  })
  console.log(props)
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
          <div key={ticket.id} className="border bg-pink-50 p-5 w-screen flex">
            <div class="border-4 bg-green-50 mx-auto p-5 w-3/4">
              <p>Title: {ticket.ticketTitle}</p>
              <p>Ticket: {ticket.ticketDescription}</p>
              <p>Priority Level: {ticket.priority}</p>
              <p>Timestamp: {ticket.createdAt}</p>
            </div>

            {/* <p>Comments: {ticket.ticketsAndComments}</p> */}
            <div class="flex mx-auto">
              <button class="border-2 text-2xl bg-blue-500 text-white rounded-2xl p-2 h-1/2 hover:bg-red-500 mt-10">
                edit ticket
              </button>
              <button class="border-2 text-2xl bg-blue-500 text-white rounded-2xl p-2 h-1/2 hover:bg-red-500 mt-10">
                close ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Currenttickets
