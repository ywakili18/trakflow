import React, { useEffect, useState } from 'react'
import Client from '../services/api'
import { useHistory } from 'react-router'
const Currenttickets = (props) => {
  const [tickets, setTickets] = useState([])
  const [deleteButton, confirmDeleteButton] = useState(false)

  useEffect(() => {
    async function getTickets() {
      const res = await Client.get('/tickets')
      console.log(res.data)
      setTickets(res.data)
    }
    getTickets()
  }, [])

  const history = useHistory()

  return (
    <div className="text-lg">
      <div className="border-2 rounded-2xl">
        <p className="p-5 text-center font-bold text-2xl text-gray-600 ">
          Open Tickets
        </p>

        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            id={ticket.id}
            className="border bg-white p-5  flex-col"
          >
            <div className="border-4 bg-pink-50 mx-auto p-5">
              <p>Title: {ticket.ticketTitle}</p>
              <p>Id: {ticket.id}</p>
              <p>Issue: {ticket.ticketDescription}</p>
              <p>Priority Level: {ticket.priority}</p>
              <p>Timestamp: {ticket.createdAt}</p>
            </div>

            {/* <p>Comments: {ticket.ticketsAndComments}</p> */}
            <div className="flex mx-auto">
              <button onClick={() => confirmDeleteButton(!deleteButton)}>
                {deleteButton ? (
                  <div>
                    <button
                      onClick={function handleDelete(e) {
                        e.preventDefault()
                        Client.delete(`/tickets/${ticket.id}`).then((res) => {
                          window.location.reload()
                        })
                      }}
                      className="border-2 
                text-2xl bg-blue-500 
                text-white rounded-2xl 
                p-2 h-1/2 hover:bg-red-500 
                mt-10"
                    >
                      Confirm to Delete{' '}
                    </button>
                    <button
                      onClick={() => confirmDeleteButton(!deleteButton)}
                      className="border-2 
                text-2xl bg-blue-500 
                text-white rounded-2xl 
                p-2 h-1/2 hover:bg-red-500 
                mt-10"
                    >
                      Cancel delete request
                    </button>
                  </div>
                ) : (
                  <button
                    className="border-2 
                  text-2xl bg-blue-500 
                  text-white rounded-2xl 
                  p-2 h-1/2 hover:bg-red-500 
                  mt-10"
                  >
                    Delete ticket
                  </button>
                )}
              </button>

              <button
                onClick={function handleClick(e) {
                  history.push(`/tickets/${ticket.id}`)
                }}
                className="border-2 text-2xl bg-blue-500 text-white rounded-2xl p-2 h-1/2 hover:bg-red-500 mt-10"
              >
                edit ticket
              </button>
              {/* <button
                onClick={function handleDelete(e) {
                  e.preventDefault()
                  Client.delete(`/tickets/${ticket.id}`).then((res) => {
                    window.location.reload()
                  })
                }}
                className="border-2 
                text-2xl bg-blue-500 
                text-white rounded-2xl 
                p-2 h-1/2 hover:bg-red-500 
                mt-10"
              >
                close ticket
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Currenttickets
