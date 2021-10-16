import React from 'react'
import { useHistory } from 'react-router'
const Home = () => {
  const history = useHistory()
  return (
    <div class="home h-screen text-white text-4xl">
      <div class="flex">
        <h1
          class=" text-transparent bg-clip-text mt-10
            bg-gradient-to-r from-blue-300 to-pink-500 ml-5"
        >
          Trakflow.
        </h1>
      </div>{' '}
      <div class="mt-10 p-5">
        <p>A simple bug tracker application.</p>
        <p class="mt-2 sm:mt-0">Made to solve your problems, a bit easier.</p>
        <button
          className="border-2 
          text-2xl bg-pink-200
          text-white rounded-2xl p-4 
          hover:bg-purple-200 
          hover:text-pink-400 mt-10"
          onClick={function handleClick(e) {
            history.push(`/login`)
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Home
