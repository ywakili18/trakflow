import React, { useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Currenttickets from './Currenttickets'
import Client from '../services/api'
const Newticket = () => {
  const [newTicket, setNewTicket] = useState({
    ticketTitle: '',
    ticketDescription: '',
    priority: ''
  })

  // handle change is temporarily holding the information
  const handleChange = (e) => {
    e.preventDefault()
    setNewTicket(e.target.value)
  }
  // handle submit to take the data and post to back end
  const handleSubmit = async (e) => {
    e.preventDefault()
    Client.post('/createTicket', newTicket)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <form
      className="bg-white w-screen text-base flex flex-col mt-5"
      onSubmit={handleSubmit}
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
          onChange={handleChange}
        ></input>
      </div>
      {/* New bug form */}
      <div className="flex p-5 justify-evenly bg-indigo-50">
        <input
          className="bg-white  shadow border h-40 w-1/2 mx-auto"
          placeholder="Describe in detail new bug/issue"
          name="ticketDescription"
          value={newTicket.ticketDescription}
          onChange={handleChange}
        ></input>
        {/* Priority level */}
        <div>
          <p className="mx-auto border-2 bg-white flex">Priority Level</p>
          <select className="text-center mt-11 w-3/4 text-xl">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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
