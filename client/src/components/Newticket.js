import React, { useState } from 'react'
import { FcLeftUp2 } from 'react-icons/fc'
import { HiOutlineTicket } from 'react-icons/hi'
import Client from '../services/api'
import { motion, AnimatePresence } from 'framer-motion'

const Newticket = (props) => {
  const [newTicket, setNewTicket] = useState({
    ticketTitle: '',
    ticketDescription: '',
    priority: '',
    userId: props.user.id
  })
  const [show, setShow] = useState(false)

  // handle change is temporarily holding the information
  const handleChange = (e) => {
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
    <div class=" bg-gray-300 ">
      {/* Title */}
      <div
        className="
          mx-auto
          text-center 
          text-sm font-bold  
          w-full"
      >
        <div>
          <button
            onClick={() => setShow(!show)}
            className="
            text-indigo-900 
            transition-colors 
            duration-150 
            bg-purple-100 rounded-lg 
            focus:shadow-outline 
            hover:bg-pink-800 py-2 px-4 rounded-lg"
          >
            {show ? 'Cancel' : 'Submit a new ticket request'}

            <HiOutlineTicket className="text-xl" />
          </button>
        </div>

        <AnimatePresence>
          {show ? (
            // form container
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm  
              mx-auto border-2 border-white 
              bg-purple-50 p-10 mt-5  fixed inset-0 form
              text-left"
              onSubmit={(e) => handleSubmit(e)}
            >
              {/* Ticket Title */}
              <div className="">
                <div
                  class="
                text-sm sm:text-2xl 
                text-center text-blue-500 font-black
                underline"
                >
                  New Ticket Request
                </div>
                <div className="mt-1 flex flex-col text-blue-500 ">
                  <span className="text font-light">Subject</span>
                  <input
                    className="
                    focus:ring-indigo-500 
                    focus:border-indigo-500 flex  
                    shadow-xl border
                    sm:text-sm bg-purple-50 p-2"
                    placeholder="Regarding #23..."
                    type="text"
                    name="ticketTitle"
                    value={newTicket.ticketTitle}
                    onChange={(e) => handleChange(e)}
                    id="ticketTitle"
                    required
                  ></input>
                </div>
              </div>
              {/* New bug form */}
              <div className="flex-col mt-5 text-blue-500">
                <div>
                  <span className="text font-light">Description</span>
                </div>

                <div className="flex">
                  <textarea
                    className="focus:ring-indigo-500 
              focus:border-indigo-500 flex  
              shadow-xl border
              sm:text-sm bg-purple-50 p-10 w-screen"
                    placeholder="Data not rendering from API..."
                    name="ticketDescription"
                    value={newTicket.ticketDescription}
                    onChange={(e) => handleChange(e)}
                    id="ticketDescription"
                    type="text"
                    required
                  ></textarea>
                </div>

                {/* Priority level */}
                <div className="mt-5 font-light">
                  <p className="flex justify-start font-light mt-1">
                    Priority Level:
                  </p>
                  <div className="flex">
                    <input
                      className="
                      flex 
                      shadow 
                      border form-radio
                      mt-2"
                      name="priority"
                      value="High"
                      onChange={(e) => handleChange(e)}
                      id="priority"
                      type="radio"
                    ></input>
                    <div className="border ml-2 text-xs mt-1">High</div>
                  </div>
                  <div className="flex ">
                    <input
                      className="bg-white flex shadow border mt-2"
                      name="priority"
                      value="Medium"
                      onChange={(e) => handleChange(e)}
                      id="priority"
                      type="radio"
                    ></input>
                    <div className="border ml-2 text-xs mt-1">Medium</div>
                  </div>
                  <div className="flex border-black">
                    <input
                      className="bg-white flex shadow border mt-2"
                      name="priority"
                      value="Low"
                      onChange={(e) => handleChange(e)}
                      id="priority"
                      type="radio"
                      required
                    ></input>
                    <div className="border ml-2 text-xs mt-1">Low</div>
                  </div>

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
                  <button
                    onClick={() => {
                      setShow(false)
                    }}
                    className="mt-4 text-indigo-900 
            transition-colors 
            duration-150 
            bg-purple-100 rounded-lg 
            focus:shadow-outline 
            hover:bg-pink-800 py-2 px-4 rounded-lg flex"
                  >
                    <p>Cancel ticket</p>
                    <FcLeftUp2 className="text-lg" />
                  </button>
                </div>
              </div>
            </motion.form>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Newticket
