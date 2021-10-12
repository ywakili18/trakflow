import React from 'react'

const Registerform = () => {
  return (
    <div>
      <div class="flex min-h-screen">
        {/* image container */}
        <div class="register w-1/2 "></div>
        {/* Register form container */}
        <form class="w-1/2 bg-blue-100 text-gray-800  px-4 py-6 flex flex-col justify-center">
          <div class="mx-auto text-center">
            <p class="text-2xl font-light tracking-wider">
              Register your account
            </p>
            <div class=" mt-4 bg-white shadow-2xl sm:rounded-lg text-left text-sm">
              <div class="py-6 px-8">
                <label class="block font-semibold">Enter Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  class=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label class="block font-semibold mt-4">Enter Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  class=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label class="block mt-3 font-semibold">Create Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  class=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label class="block mt-3 font-semibold">Confirm Password</label>
                <input
                  type="Confirm Password"
                  placeholder="Password"
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
                  >
                    Login
                  </button>
                  <a class="text-sm  over:underline p-4">Forgot password?</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registerform
