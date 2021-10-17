import React, { useEffect, useState } from 'react'
import Client from '../services/api'
import { useHistory } from 'react-router'
import Moment from 'react-moment'
import 'moment-timezone'
import { FcFlowChart } from 'react-icons/fc'
import { HiOutlineIdentification } from 'react-icons/hi'
import { GoIssueOpened } from 'react-icons/go'
import { RiGhostFill } from 'react-icons/ri'
import { BsPersonBadge } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
const Currenttickets = (props) => {
  const [tickets, setTickets] = useState([])
  const [deleteButton, confirmDeleteButton] = useState(false)

  useEffect(() => {
    async function getTickets() {
      const res = await Client.get('/tickets')
      setTickets(res.data)
      console.log(res.data)
    }
    getTickets()
  }, [])

  const history = useHistory()

  return (
    <AnimatePresence>
      <div className="flex flow">
        <div className="w-screen">
          <div
            className="
          flex 
          mt-10 justify-center
          mb-10 text-4xl 
          text-purple-400"
          >
            <FcFlowChart />
            <div className="text-purple-200 flex text-2xl sm:text-4xl">
              Current flow
            </div>
            <FcFlowChart />
          </div>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              id={ticket.id}
              className="border-2 border-purple-200 mb-5"
            >
              {/* Ticket Information Container */}
              <div className="mx-auto p-5 ">
                <div
                  className="
              flex-col justify-between 
              text-left p-2 text-xl"
                >
                  {/* Title of open ticket, its priority level, id, and content */}
                  <div className="text-left p-2 sm:text-2xl rounded-2xl">
                    <p className="text-center p-2 bg-purple-100 font-bold underline uppercase  mx-auto ">
                      {ticket.ticketTitle}
                    </p>{' '}
                    <p className="font-bold text-purple-200 sm:text-2xl mt-2 flex">
                      <HiOutlineIdentification className="mr-2 text-3xl" />
                      Id:<span className="font-light"> #{ticket.id}</span>
                    </p>
                    <div className="font-bold text-purple-200 sm:text-2xl flex mt-2">
                      <p className="text-3xl text-purple-100">
                        <BsPersonBadge />
                      </p>{' '}
                      <p className="mt-1 text-xl ml-2">
                        {ticket.ticketsAndUsers.userName}
                      </p>
                    </div>
                    <div className="font-bold text-purple-200 sm:text-2xl mt-2 flex">
                      <RiGhostFill className="text-3xl mr-2" />
                      Role: {ticket.ticketsAndUsers.role}
                    </div>
                    <div className="mt-1">
                      <p className=" mt-5 font-light break-words text-purple-200 sm:text-2xl">
                        <GoIssueOpened className="mb-2 text-3xl" />
                        <p className="sm:text-2xl  text-purple-200 font-bold">
                          Issue:
                        </p>
                        <div className="text-base sm:text-xl">
                          {ticket.ticketDescription}
                        </div>
                      </p>
                    </div>
                    <div className="sm:text-xl mt-2  text-purple-200 ">
                      <p className="font-bold text-lg sm:text-2xl">Priority:</p>
                      <p className="text-sm flex sm:text-lg">
                        {ticket.priority}{' '}
                      </p>
                    </div>
                    <p className="text-lg italic text-purple-200 mt-5">
                      Ticket first issued: {''}
                      <Moment
                        date={ticket.createdAt}
                        format="MM-DD-YYYY h:mm"
                        tz="America/Los_Angeles"
                      />
                      PST
                    </p>
                    <p className="text-lg text-purple-200 italic mt-5">
                      Updated: {''}
                      <Moment
                        date={ticket.updatedAt}
                        format="MM-DD-YYYY h:mm"
                        tz="America/Los_Angeles"
                      />
                      PST
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons Container */}
              <div className="flex justify-evenly">
                {/* View Comments */}
                <button
                  onClick={function handleClick(e) {
                    history.push(`/comments/${ticket.id}`)
                  }}
                  className="border-2 
                text-sm 
                bg-red-500  hover:bg-pink-800 
                transition-all
                text-purple-100 
                uppercase 
                font-bold 
                rounded-2xl 
                p-2 
                
                mt-10"
                >
                  View Comments
                </button>
                {/* Edit ticket */}
                <button
                  onClick={function handleClick(e) {
                    history.push(`/tickets/${ticket.id}`)
                  }}
                  className="border-2 
                text-sm 
                bg-purple-400  hover:bg-indigo-800 
                transition-all
                text-purple-100 
                uppercase 
                font-bold 
                rounded-2xl 
                p-2 
                
                mt-10"
                >
                  Add update to ticket
                </button>
                {/* Delete ticket */}
                <button onClick={() => confirmDeleteButton(!deleteButton)}>
                  {deleteButton ? (
                    <motion.div
                      initial={{ x: 300 }}
                      animate={{ x: 0 }}
                      exit={{ x: -300 }}
                      transition={{ type: 'tween', duration: 0.5 }}
                      className=""
                    >
                      <button
                        onClick={function handleDelete(e) {
                          e.preventDefault()
                          Client.delete(`/tickets/${ticket.id}`).then((res) => {
                            window.location.reload()
                          })
                        }}
                        className="border-2 
                      text-sm bg-indigo-500 
                      text-white rounded-2xl 
                      p-2 hover:bg-purple-200  transition-all
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
                    </motion.div>
                  ) : (
                    <motion.button
                      initial={{ x: 300 }}
                      animate={{ x: 0 }}
                      exit={{ x: -300 }}
                      transition={{ type: 'tween' }}
                      className="
                    border-2 
                    text-sm bg-gray-500 
                    font-bold 
                    uppercase 
                    text-white 
                    rounded-2xl 
                    p-2 
                    hover:bg-gray-800  
                    transition-all
                    mt-10"
                    >
                      Delete ticket
                    </motion.button>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Currenttickets
