import React, { useEffect, useState } from 'react'
import Client from '../services/api'
import { useHistory } from 'react-router'
import Moment from 'react-moment'
import 'moment-timezone'
import { FcFlowChart } from 'react-icons/fc'
import { HiOutlineIdentification } from 'react-icons/hi'
import { MdOutlineInsertComment } from 'react-icons/md'
import { RiGhostFill } from 'react-icons/ri'
import { BsPersonBadge } from 'react-icons/bs'
const Currentcomments = (props) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function getComments() {
      const res = await Client.get('/comments')
      setComments(res.data)
      console.log(res.data)
    }
    getComments()
  }, [])

  const history = useHistory()

  return (
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
            Comments
          </div>
          <FcFlowChart />
        </div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            id={comment.id}
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
                  <p className="font-bold text-purple-200 sm:text-2xl mt-2 flex">
                    <HiOutlineIdentification className="mr-2 text-3xl" />
                    Comment<span className="font-light"> #{comment.id}</span>
                  </p>
                  <div className="font-bold text-purple-200 sm:text-2xl flex mt-2">
                    <p className="text-3xl text-purple-100">
                      <BsPersonBadge />
                    </p>{' '}
                    <p className="mt-1 text-xl ml-2">
                      {comment.commentsAndUsers.userName}
                    </p>
                  </div>
                  <div className="font-bold text-purple-200 sm:text-2xl mt-2 flex">
                    <RiGhostFill className="text-3xl mr-2" />
                    Role: {comment.commentsAndUsers.role}
                  </div>
                  <p
                    className="
                        font-bold 
                        text-purple-700
                        sm:text-xl mt-5 bg-indigo-200 rounded-2xl p-10 flex"
                  >
                    <MdOutlineInsertComment className="mr-2 text-2xl" />
                    <span className="font-light italic">
                      {' '}
                      "{comment.commentContent}"
                    </span>
                  </p>
                  <p className="text-lg italic text-purple-200 mt-5">
                    Created: {''}
                    <Moment
                      date={comment.createdAt}
                      format="MM-DD-YYYY h:mm"
                      tz="America/Los_Angeles"
                    />
                    PST
                  </p>
                  <p className="text-lg text-purple-200 italic mt-5">
                    Updated: {''}
                    <Moment
                      date={comment.updatedAt}
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
              {/* Edit ticket */}
              <button
                onClick={function handleClick(e) {
                  history.push(`/dashboard`)
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
                Return to dashboard
              </button>
              {/* Delete ticket */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Currentcomments
