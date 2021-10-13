import React from 'react'
import { BiCommentAdd } from 'react-icons/bi'

const Newticket = (props) => {
  return (
    <div class="bg-red-100 w-screen text-lg flex flex-col justify-center">
      <div class="flex p-10 mb-60 border bg-blue-400">
        <textarea
          class="bg-gray-200 rounded-lg shadow border w-1/2 h-48 mx-auto"
          placeholder="Describe in detail new bug/issue"
        ></textarea>
        <div class="flex">
          <button
            type="button"
            class=" bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
          >
            Submit Ticket
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newticket
