import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Client from '../services/api'
const Newticket = (props) => {
  return (
    <form class="bg-white w-screen text-base flex flex-col">
      {/* Ticket Title */}
      <div class="flex border  titleContainer">
        <input
          class="shadow border w-3/4 mx-auto bg-purple-50 h-1/2 mt-5 p-5 text-center text-xl"
          placeholder="Ticket title"
        ></input>
      </div>
      {/* New bug form */}
      <div class="flex p-5 justify-evenly bg-indigo-50">
        <textarea
          class="bg-white  shadow border h-40 w-1/2 mx-auto"
          placeholder="Describe in detail new bug/issue"
        ></textarea>
        {/* Priority level */}
        <div>
          <p class="mx-auto border-2 bg-white flex">Priority Level</p>
          <select class="text-center mt-11 w-3/4 text-xl">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button
          type="button"
          class="text-blue-400 hover:text-red-400 transition-all text-white px-4 mt-2 ml-1  mx-auto  text-3xl"
        >
          <BsPlusCircleFill />
        </button>
      </div>
    </form>
  )
}

export default Newticket
