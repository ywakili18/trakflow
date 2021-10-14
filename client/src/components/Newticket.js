import React, { useState, useEffect } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Currenttickets from './Currenttickets'
import Client from '../services/api'

const Newticket = (props) => {
  console.log(props.user)
  const [newTicket, setNewTicket] = useState({
    ticketTitle: '',
    ticketDescription: '',
    priority: 0,
    userId: props.user.id
  })

  // handle change is temporarily holding the information
  const handleChange = (e) => {
    e.preventDefault()
    const newData = { ...newTicket }
    newData[e.target.name] = e.target.value
    setNewTicket(newData)
    console.log(newData)
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
    })
  }

  return (
    <form
      className="bg-white w-screen text-base flex flex-col mt-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <p className="p-5 text-center bg-purple-400 text-4xl text-gray-600 ">
          Submit a new Ticket
        </p>
      </div>

      {/* Ticket Title */}
      <div className="flex border  titleContainer">
        <input
          className="shadow border w-3/4 mx-auto bg-purple-50 h-1/2 mt-5 p-5 text-center text-xl"
          placeholder="Ticket title"
          type="text"
          name="ticketTitle"
          value={newTicket.ticketTitle}
          onChange={(e) => handleChange(e)}
          id="ticketTitle"
        ></input>
      </div>
      {/* New bug form */}
      <div className="flex p-5 justify-evenly bg-indigo-50">
        <input
          className="bg-white  shadow border h-40 w-1/2 mx-auto"
          placeholder="Describe in detail new bug/issue"
          name="ticketDescription"
          value={newTicket.ticketDescription}
          onChange={(e) => handleChange(e)}
          id="ticketDescription"
          type="text"
        ></input>
        {/* Priority level */}
        <div>
          <p className="mx-auto border-2 bg-white flex">Priority Level</p>
          <input
            className="bg-white  shadow border h-40 w-1/2 mx-auto"
            placeholder="Describe in detail new bug/issue"
            name="priority"
            value={newTicket.priority}
            onChange={(e) => handleChange(e)}
            id="priority"
            type="number"
          ></input>
        </div>
        <button
          type="submit"
          className="text-blue-400 hover:text-red-400 transition-all text-white px-4 mt-2 ml-1  mx-auto  text-3xl"
        >
          <BsPlusCircleFill />
        </button>
      </div>
      <div className="flex bg-pink-100 mt-5">
        <Currenttickets />
      </div>
    </form>
  )
}

export default Newticket
