import React, { useState } from 'react'
import Client from '../services/api'
import { useHistory } from 'react-router'
const Editticketpage = (props) => {
  const history = useHistory()
  const [updatedTicket, setUpdatedTicket] = useState({
    ticketTitle: '',
    ticketDescription: '',
    priority: 0,
    ticketId: props.match.params.ticketId
  })

  const handleChange = (e) => {
    e.preventDefault()
    const newData = { ...updatedTicket }
    newData[e.target.name] = e.target.value
    setUpdatedTicket(newData)
  }
  // handle submit to take the data and post to back end
  const handleSubmit = async (e) => {
    e.preventDefault()
    Client.put(`/tickets/${updatedTicket.ticketId}`, {
      ticketTitle: updatedTicket.ticketTitle,
      ticketDescription: updatedTicket.ticketDescription,
      priority: updatedTicket.priority,
      ticketId: updatedTicket.ticketId
    }).then((res) => {
      console.log(res.data)
      history.push(`/dashboard`)
    })
  }
  return (
    <div>
      <div className="flex min-h-screen">
        {/* image container */}
        <div className="login w-1/2 "></div>
        {/* Login form container */}
        <div className="w-1/2 bg-pink-100 text-gray-800  px-4 py-6 flex flex-col justify-center">
          <div className="mx-auto text-center">
            <p className="text-2xl font-light">Edit ticket</p>
            <div className=" mt-4 bg-white shadow-2xl sm:rounded-lg text-left text-sm">
              <form className="py-6 px-8" onSubmit={handleSubmit}>
                <label className="block font-semibold">Ticket Title</label>
                <input
                  name="ticketTitle"
                  value={updatedTicket.ticketTitle}
                  onChange={(e) => handleChange(e)}
                  id="ticketTitle"
                  type="text"
                  className=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label className="block mt-3 font-semibold">Edit Ticket</label>
                <input
                  name="ticketDescription"
                  value={updatedTicket.ticketDescription}
                  onChange={(e) => handleChange(e)}
                  id="ticketDescription"
                  type="text"
                  className=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <div className="flex justify-between items-baseline">
                  <button
                    className="mt-4 text-indigo-100 
                      transition-colors 
                      duration-150 
                      bg-blue-500 rounded-lg 
                      focus:shadow-outline 
                      hover:bg-pink-500 p-5 mx-auto rounded-lg"
                  >
                    Save
                  </button>
                  <p className="text-sm hover:underline p-4"></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editticketpage
