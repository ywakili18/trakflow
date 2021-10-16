import React, { useEffect, useState } from 'react'
import Client from '../services/api'
import { useHistory } from 'react-router'
import Moment from 'react-moment'
import 'moment-timezone'
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
    <div className="flex bg-white">
      <div className="mx-auto rounded-2xl">
        <p className="p-5 text-center font-bold text-2xl text-gray-600 ">
          Open Tickets
        </p>
        {tickets.map((ticket) => (
          <div key={ticket.id} id={ticket.id} className="border">
            {/* Ticket Information Container */}
            <div className="mx-auto p-5">
              <div
                className="
              flex-col justify-between 
              text-blue-400 text-left p-2 text-xl"
              >
                <div className="text-left p-2 text-sm">
                  <p className="font-black tracking-wide">
                    {ticket.ticketTitle}
                  </p>
                </div>

                <p className="text-left p-2 text-sm">
                  Priority: {ticket.priority}
                </p>
                <p className="text-left p-2 text-sm">#{ticket.id}</p>
              </div>
              <div
                className="
              font-light bg-red-50 
              mt-10 border-2 rounded-2xl text-lg"
              >
                <p className="text-center p-2 bg-blue-200 font-bold underline">
                  Issue{' '}
                </p>
                <p className=" mt-5 font-light  text-sm">
                  {ticket.ticketDescription}
                </p>
                <p className="text-xs italic mt-5">
                  Ticket first issued: {''}
                  <Moment
                    date={ticket.createdAt}
                    format="MM-DD-YYYY h:mm"
                    tz="America/Los_Angeles"
                  />
                  pst
                </p>
                <p className="text-xs italic mt-5">
                  Updated: {''}
                  <Moment
                    date={ticket.updatedAt}
                    format="MM-DD-YYYY h:mm"
                    tz="America/Los_Angeles"
                  />
                  pst
                </p>
              </div>
            </div>

            {/* <p>Comments: {ticket.ticketsAndComments}</p> */}
            {/* Buttons Container */}
            <div className="flex justify-between">
              {/* Edit ticket */}
              <button
                onClick={function handleClick(e) {
                  history.push(`/tickets/${ticket.id}`)
                }}
                className="border-2 
                text-sm bg-blue-800  transition-all
                text-white rounded-2xl 
                p-2 hover:bg-blue-200 
                mt-10"
              >
                Add update to ticket
              </button>
              {/* Delete ticket */}
              <button onClick={() => confirmDeleteButton(!deleteButton)}>
                {deleteButton ? (
                  <div className="">
                    <button
                      onClick={function handleDelete(e) {
                        e.preventDefault()
                        Client.delete(`/tickets/${ticket.id}`).then((res) => {
                          window.location.reload()
                        })
                      }}
                      className="border-2 
                      text-sm bg-red-800 
                      text-white rounded-2xl 
                      p-2 hover:bg-red-200  transition-all
                      mt-10"
                    >
                      Confirm to Delete{' '}
                    </button>
                    <button
                      onClick={() => confirmDeleteButton(!deleteButton)}
                      className="border-2 
                      text-sm bg-red-800 
                      text-white rounded-2xl 
                      p-2 hover:bg-red-200  transition-all
                      mt-10"
                    >
                      Cancel delete request
                    </button>
                  </div>
                ) : (
                  <button
                    className="border-2 
                  text-sm bg-red-800 
                  text-white rounded-2xl 
                  p-2 hover:bg-red-200  transition-all
                  mt-10"
                  >
                    Delete ticket
                  </button>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Currenttickets
