import React, { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { motion, AnimatePresence } from 'framer-motion'
const Loginform = (props) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    console.log(e.target.name)
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    props.history.push('/dashboard')
  }
  return (
    <AnimatePresence>
      <div>
        <div className="flex min-h-screen">
          {/* image container */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ y: 300 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="login w-1/2 "
          ></motion.div>
          {/* Login form container */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="w-1/2 bg-gradient-to-b from-blue-200 via-red-200 to-red-400 text-gray-800  px-4 py-6 flex flex-col justify-center"
          >
            <div className="mx-auto text-center">
              <p className="text-2xl font-light text-gray-500">
                Login to your{' '}
                <span class="font-bold text-indigo-400 underline">
                  Trafklow
                </span>{' '}
                account
              </p>
              <div className=" mt-4 bg-white shadow-2xl sm:rounded-lg text-left text-sm">
                <form className="py-6 px-8" onSubmit={handleSubmit}>
                  <label className="block font-semibold">Email</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    value={formValues.email}
                    required
                    className=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  <label className="block mt-3 font-semibold">Password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={formValues.password}
                    placeholder="Enter password here"
                    required
                    className=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  <div className="flex justify-between items-baseline">
                    <button
                      className="mt-4 text-indigo-100 
                        transition-colors 
                        duration-150 
                        bg-blue-700 rounded-lg 
                        focus:shadow-outline 
                        hover:bg-purple-400 py-2 px-4 rounded-lg"
                      disabled={!formValues.email || !formValues.password}
                    >
                      Login
                    </button>
                    <p className="text-sm hover:underline p-4">
                      Forgot password?
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Loginform
