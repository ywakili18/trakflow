import React, { useEffect, useState } from 'react'
import Client from '../services/api'
import { useHistory } from 'react-router'
const Currenttickets = (props) => {
  const [tickets, setTickets] = useState([])
  useEffect(() => {
    async function getTickets() {
      const res = await Client.get('/tickets')
      setTickets(res.data)
    }
    getTickets()
  }, [])

  const history = useHistory()

  return (
    <div className="text-lg">
      <div className="border">
        <p className="p-5 text-center bg-pink-500 text-2xl text-gray-600 ">
          Open Tickets
        </p>

        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            id={ticket.id}
            className="border bg-pink-50 p-5  flex"
          >
            <div className="border-4 bg-green-50 mx-auto p-5 w-3/4">
              <p>Title: {ticket.ticketTitle}</p>
              <p>Ticket: {ticket.ticketDescription}</p>
              <p>Priority Level: {ticket.priority}</p>
              <p>Timestamp: {ticket.createdAt}</p>
            </div>

            {/* <p>Comments: {ticket.ticketsAndComments}</p> */}
            <div className="flex mx-auto">
              <button
                onClick={function handleClick(e) {
                  history.push(`/tickets/${ticket.id}`)
                }}
                className="border-2 text-2xl bg-blue-500 text-white rounded-2xl p-2 h-1/2 hover:bg-red-500 mt-10"
              >
                edit ticket
              </button>
              <button
                onClick={function handleDelete(e) {
                  e.preventDefault()
                  Client.delete(`/tickets/${ticket.id}`).then((res) => {
                    console.log(res.data)
                  })
                }}
                className="border-2 text-2xl bg-blue-500 text-white rounded-2xl p-2 h-1/2 hover:bg-red-500 mt-10"
              >
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
