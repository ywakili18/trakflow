import React from 'react'

const Loginform = () => {
  return (
    <div>
      <div class="flex min-h-screen">
        {/* image container */}
        <div class="login w-1/2 "></div>
        {/* Login form container */}
        <div class="w-1/2 bg-yellow-100 text-gray-800  px-4 py-6 flex flex-col justify-center">
          <div class="mx-auto text-center">
            <p class="text-2xl font-light">Login to your account</p>
            <div class=" mt-4 bg-white shadow-md sm:rounded-lg text-left text-sm">
              <div class="h-2 bg-green-600 rounded-t-md"></div>
              <div class="py-6 px-8">
                <label class="block font-semibold">Username or Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  class=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label class="block mt-3 font-semibold">Password</label>
                <input
                  type="password"
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
                  <a class="text-sm hover:underline p-4">Forgot password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginform
