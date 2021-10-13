import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'

const Newticket = (props) => {
  return (
    <div class="bg-white w-screen text-base flex flex-col">
      <div class="flex border justify-center titleContainer">
        <input
          class="shadow border w-3/4 mx-auto bg-purple-50 h-1/2 mt-5 text-center text-xl"
          placeholder="Ticket title"
        ></input>
        <button
          type="button"
          class="text-blue-400 hover:text-red-400 transition-all text-white px-4 mt-5 ml-1 mb-5 mx-auto  text-3xl"
        >
          <BsPlusCircleFill />
        </button>
      </div>
      {/* New bug form */}
      <div class="flex p-10 bg-indigo-50 border justify-center">
        <textarea
          class="bg-gray-200  shadow border w-3/4 mx-auto"
          placeholder="Describe in detail new bug/issue"
        ></textarea>
        <button
          type="button"
          class=" bg-indigo-400 hover:bg-indigo-300 text-white p-2 h-1/2 rounded-2xl p-5 mt-5 mx-auto"
        >
          <BsPlusCircleFill />
        </button>
      </div>
    </div>
  )
}

export default Newticket
