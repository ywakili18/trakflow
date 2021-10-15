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
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="login w-1/2 "
          ></motion.div>
          {/* Login form container */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="w-1/2 bg-indigo-100 text-gray-800  px-4 py-6 flex flex-col justify-center"
          >
            <div className="mx-auto text-center">
              <p className="text-2xl font-light">Login to your account</p>
              <div className=" mt-4 bg-white shadow-2xl sm:rounded-lg text-left text-sm">
                <form className="py-6 px-8" onSubmit={handleSubmit}>
                  <label className="block font-semibold">
                    Username or Email
                  </label>
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
                        hover:bg-pink-800 py-2 px-4 rounded-lg"
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
