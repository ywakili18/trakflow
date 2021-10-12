import React, { useState } from 'react'
import { SignInUser } from '../services/Auth'
const Loginform = (props) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
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
    <div>
      <div class="flex min-h-screen">
        {/* image container */}
        <div class="login w-1/2 "></div>
        {/* Login form container */}
        <div class="w-1/2 bg-yellow-100 text-gray-800  px-4 py-6 flex flex-col justify-center">
          <div class="mx-auto text-center">
            <p class="text-2xl font-light">Login to your account</p>
            <div class=" mt-4 bg-white shadow-2xl sm:rounded-lg text-left text-sm">
              <form class="py-6 px-8" onSubmit={handleSubmit}>
                <label class="block font-semibold">Username or Email</label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  value={formValues.email}
                  required
                  class=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label class="block mt-3 font-semibold">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={formValues.password}
                  required
                  class=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <div class="flex justify-between items-baseline">
                  <button
                    class="mt-4 text-indigo-100 
                        transition-colors 
                        duration-150 
                        bg-blue-700 rounded-lg 
                        focus:shadow-outline 
                        hover:bg-pink-800 py-2 px-4 rounded-lg"
                    disabled={!formValues.email || !formValues.password}
                  >
                    Login
                  </button>
                  <a class="text-sm hover:underline p-4">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginform
