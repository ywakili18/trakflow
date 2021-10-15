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
        <div class="flex min-h-screen">
          {/* Register form container */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: 'tween', duration: 0.5 }}
            class="w-1/2 bg-blue-100 text-gray-800  px-4 py-6 flex flex-col justify-center"
          >
            <div class="mx-auto text-center">
              <p class="text-2xl font-light tracking-wider">
                Register your account
              </p>
              {/* input form container */}
              <div class=" mt-4 bg-white shadow-2xl sm:rounded-lg text-left text-sm">
                {/* Email */}
                <form class="py-6 px-8" onSubmit={handleSubmit}>
                  <label class="block font-semibold" htmlFor="email">
                    Enter Email
                  </label>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    value={formValues.email}
                    required
                    class=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
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
                    class=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  {/* Password */}
                  <label class="block mt-3 font-semibold" htmlFor="password">
                    Create Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={formValues.password}
                    required
                    class=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  {/* Confirm Password */}
                  <label
                    class="block mt-3 font-semibold"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    required
                    class=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  {/* Role */}
                  <label class="block mt-3 font-semibold">Your role</label>
                  <input
                    onChange={handleChange}
                    name="role"
                    type="text"
                    placeholder="ex: Jr.Dev, UX/UI designer"
                    value={formValues.role}
                    required
                    class=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  {/* Register Button */}
                  <div class="flex justify-between items-baseline">
                    <button
                      disabled={
                        !formValues.email ||
                        (!formValues.password &&
                          formValues.confirmPassword === formValues.password)
                      }
                      type="submit"
                      class="mt-4 text-indigo-100 
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
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.5 }}
            class="register w-1/2 "
          ></motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}
