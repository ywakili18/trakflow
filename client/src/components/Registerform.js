import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
const iState = {
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  userName: ''
}

export default function Registerform(props) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    userName: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    console.log(e)
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password,
      role: formValues.role
    })
    setFormValues(iState)
    history.push('/login')
  }
  const history = useHistory()
  return (
    <AnimatePresence>
      <div>
        <div className="flex min-h-screen">
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ y: 300 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className=" w-1/2 register "
          ></motion.div>
          {/* Register form container */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="w-1/2 
            bg-gradient-to-b from-red-200 via-blue-200 to-blue-400 
            text-gray-800  
            px-4 py-6 flex flex-col 
            justify-center"
          >
            <div className="mx-auto text-center w-full sm:w-auto">
              <p className="text-sm sm:text-2xl  text-gray-500">
                Register and use{' '}
                <span class="font-bold text-indigo-400 underline">
                  Trakflow
                </span>{' '}
                today
              </p>
              {/* input form container */}
              <div className=" mt-4 bg-white rounded-lg text-left text-xs sm-text-2xl">
                {/* Email */}
                <form className="p-2 sm:p-8" onSubmit={handleSubmit}>
                  <label className="block font-semibold" htmlFor="email">
                    Enter Email
                  </label>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    value={formValues.email}
                    required
                    className=" 
                    border w-full h-5 
                    px-2 py-4 mt-2 
                    hover:outline-none 
                    focus:outline-none 
                    focus:ring-1 focus:ring-indigo-600 
                    rounded-md"
                  />
                  {/* Username */}
                  <label class="block font-semibold mt-4">Enter Username</label>
                  <input
                    onChange={handleChange}
                    name="userName"
                    type="text"
                    placeholder="Username"
                    value={formValues.userName}
                    required
                    className="border w-full h-5 
                    px-2 py-4 mt-2 
                    hover:outline-none 
                    focus:outline-none 
                    focus:ring-1 focus:ring-indigo-600 
                    rounded-md"
                  />
                  {/* Password */}
                  <label
                    className="block mt-3 font-semibold"
                    htmlFor="password"
                  >
                    Create Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formValues.password}
                    required
                    className="border w-full h-5 
                    px-2 py-4 mt-2 
                    hover:outline-none 
                    focus:outline-none 
                    focus:ring-1 focus:ring-indigo-600 
                    rounded-md"
                  />
                  {/* Confirm Password */}
                  <label
                    className="block mt-3 font-semibold"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    placeholder="Confirm Password"
                    required
                    className="border w-full h-5 
                    px-2 py-4 mt-2 
                    hover:outline-none 
                    focus:outline-none 
                    focus:ring-1 focus:ring-indigo-600 
                    rounded-md"
                  />
                  {/* Role */}
                  <label className="block mt-3 font-semibold">Your role</label>
                  <input
                    onChange={handleChange}
                    name="role"
                    type="text"
                    placeholder="ex: Jr.Dev, UX/UI designer"
                    value={formValues.role}
                    required
                    className="border w-full h-5 
                    px-2 py-4 mt-2 
                    hover:outline-none 
                    focus:outline-none 
                    focus:ring-1 focus:ring-indigo-600 
                    rounded-md"
                  />
                  {/* Register Button */}
                  <div className="flex justify-between items-baseline">
                    <button
                      disabled={
                        !formValues.email ||
                        (!formValues.password &&
                          formValues.confirmPassword === formValues.password)
                      }
                      type="submit"
                      className="mt-4 text-indigo-100 
                        transition-colors 
                        duration-150 
                        bg-blue-700 rounded-lg 
                        focus:shadow-outline 
                        hover:bg-pink-800 py-2 px-4 rounded-lg"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
          {/* image container */}
        </div>
      </div>
    </AnimatePresence>
  )
}
