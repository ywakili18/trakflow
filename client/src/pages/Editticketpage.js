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
      {/* image container */}
      {/* Login form container */}
      <div className="h-screen bg-pink-100 text-gray-800 flex flex-col justify-center">
        <div className="mx-auto text-center">
          <p className="text-xl text-purple-500 font-bold">
            Trak your new update
          </p>
          <div
            className=" 
          mt-4 shadow-2xl
          bg-blue-100 
          sm:rounded-lg 
          text-left 
          text-sm"
          >
            <form className="p-20 sm:p-40" onSubmit={handleSubmit}>
              <label className="font-semibold">Update Ticket</label>
              <textarea
                name="ticketDescription"
                value={updatedTicket.ticketDescription}
                onChange={(e) => handleChange(e)}
                id="ticketDescription"
                type="text"
                placeholder="What's the new update?"
                className=" 
                w-full bg-blue-50
                border py-10 px-16 mt-5
                hover:outline-none focus:outline-none 
                 focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <div className=" mt-10 flex justify-between">
                <button
                  className="text-indigo-100 
                      transition-colors 
                      duration-150 
                      bg-blue-100 rounded-lg 
                      focus:shadow-outline 
                      hover:bg-black 
                      hover:text-red-200 text-xl
                      text-purple-600 font-bold
                      bg-blue-200
                      p-5  
                      rounded-lg"
                >
                  Submit
                </button>
                <button
                  onClick={function handleClick(e) {
                    history.push('/dashboard')
                  }}
                  className="text-indigo-100 
                  transition-colors 
                  duration-150 
                  bg-blue-100 rounded-lg 
                  focus:shadow-outline 
                  hover:bg-black 
                  hover:text-red-200 text-xl
                  text-purple-600 font-bold
                  bg-blue-200
                  p-5  
                  rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editticketpage
