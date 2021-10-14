import React, { useEffect, useState } from 'react'
import Client from '../services/api'
import { useHistory } from 'react-router'
const Currenttickets = (props) => {
  const [tickets, setTickets] = useState([])

  // I need to have onClick button which will send user to Editticketpage.js
  // as /updateticket page. I will then need to pass in the userId state
  // into the updateTicketpage.
  const history = useHistory()
  const routeChange = () => {
    let path = `/updateticket`
    history.push(path)
  }
  useEffect(() => {
    async function getTickets() {
      const res = await Client.get('/tickets')
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
                <a to={`/tickets/${ticket.id}`}></a>edit ticket
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
