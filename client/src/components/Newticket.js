import React, { useState } from 'react'
import { FcLeftUp2 } from 'react-icons/fc'
import { HiOutlineTicket } from 'react-icons/hi'
import Client from '../services/api'

const Newticket = (props) => {
  const [newTicket, setNewTicket] = useState({
    ticketTitle: '',
    ticketDescription: '',
    priority: 0,
    userId: props.user.id
  })
  const [show, setShow] = useState(true)
  // handle change is temporarily holding the information
  const handleChange = (e) => {
    e.preventDefault()
    const newData = { ...newTicket }
    newData[e.target.name] = e.target.value
    setNewTicket(newData)
  }

  // handle submit to take the data and post to back end
  const handleSubmit = async (e) => {
    e.preventDefault()
    Client.post('/tickets/createTicket', {
      ticketTitle: newTicket.ticketTitle,
      ticketDescription: newTicket.ticketDescription,
      priority: newTicket.priority,
      userId: newTicket.userId
    }).then((res) => {
      console.log(res.data)
      window.location.reload()
    })
  }

  return (
    <div class="">
      {/* Title */}
      <div className="text-center text-sm font-bold  text-pink-800  p-2 border-2 flex justify-evenly">
        <button
          onClick={() => setShow(!show)}
          className="mt-4 text-indigo-900 
            transition-colors 
            duration-150 
            bg-purple-100 rounded-lg 
            focus:shadow-outline 
            hover:bg-pink-800 py-2 px-4 rounded-lg flex"
        >
          Submit a new ticket request
          <HiOutlineTicket className="text-xl mt-1 ml-2" />
        </button>
        {show ? (
          <form
            className="text-sm w-1/2 mx-auto border-2 p-10 text-left"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* Ticket Title */}
            <div>
              <div className="mt-1 flex flex-col ">
                <span className="text font-bold">Title</span>
                <input
                  className="focus:ring-indigo-500 
              focus:border-indigo-500 flex  
              shadow-xl border
              sm:text-sm bg-purple-50 p-2"
                  placeholder="Enter new ticket title"
                  type="text"
                  name="ticketTitle"
                  value={newTicket.ticketTitle}
                  onChange={(e) => handleChange(e)}
                  id="ticketTitle"
                ></input>
              </div>
            </div>
            {/* New bug form */}
            <div className="flex-col mt-5 ">
              <div>
                <span className="text font-bold">Ticket Description</span>
              </div>

              <div className="flex">
                <textarea
                  className="focus:ring-indigo-500 
              focus:border-indigo-500 flex  
              shadow-xl border
              sm:text-sm bg-purple-50 p-10 w-screen"
                  placeholder="Describe in detail new bug/issue"
                  name="ticketDescription"
                  value={newTicket.ticketDescription}
                  onChange={(e) => handleChange(e)}
                  id="ticketDescription"
                  type="text"
                ></textarea>
              </div>

              {/* Priority level */}
              <div className="mt-5 flex-col">
                <p className="flex justify-start font-bold mt-1">
                  Priority Level:
                </p>
                <input
                  className="bg-white flex shadow border mt-2"
                  placeholder="Describe in detail new bug/issue"
                  name="priority"
                  value={newTicket.priority}
                  onChange={(e) => handleChange(e)}
                  id="priority"
                  type="number"
                ></input>
                <button
                  type="submit"
                  className="mt-4 text-indigo-900 
            transition-colors 
            duration-150 
            bg-purple-100 rounded-lg 
            focus:shadow-outline 
            hover:bg-pink-800 py-2 px-4 rounded-lg flex"
                >
                  <p>Submit ticket</p>
                  <FcLeftUp2 className="text-lg" />
                </button>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  )
}

export default Newticket
