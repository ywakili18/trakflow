import React from 'react'

const Editticketpage = (props) => {
  return (
    <div>
      <div className="flex min-h-screen">
        {/* image container */}
        <div className="login w-1/2 "></div>
        {/* Login form container */}
        <div className="w-1/2 bg-pink-100 text-gray-800  px-4 py-6 flex flex-col justify-center">
          <div className="mx-auto text-center">
            <p className="text-2xl font-light">Edit ticket</p>
            <div className=" mt-4 bg-white shadow-2xl sm:rounded-lg text-left text-sm">
              <form className="py-6 px-8">
                <label className="block font-semibold">Ticket Title</label>
                <input
                  name="ticketTitle"
                  type="text"
                  placeholder="Edit title"
                  required
                  className=" border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label className="block mt-3 font-semibold">Edit Ticket</label>
                <input
                  type="text"
                  name="ticketContent"
                  placeholder="Edit Ticket"
                  required
                  className=" border w-full h-5 px-2 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <div className="flex justify-between items-baseline">
                  <button
                    className="mt-4 text-indigo-100 
                      transition-colors 
                      duration-150 
                      bg-blue-500 rounded-lg 
                      focus:shadow-outline 
                      hover:bg-pink-500 p-5 mx-auto rounded-lg"
                  >
                    Save
                  </button>
                  <p className="text-sm hover:underline p-4"></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editticketpage
