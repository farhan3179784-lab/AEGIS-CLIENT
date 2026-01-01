import React from 'react'

const Topfooter = () => {
  return (
    <>
       {/* TOP SUBSCRIBE BAR */}
            <div className="max-w-7xl mx-auto px-6 -mb-72 z-10 relative mt-10">
              <div className="relative -top-10 bg-[#c99817] rounded-lg px-8 py-13 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
      
                <p className="text-white text-sm md:text-base font-medium">
                  Stay informed. Stay secure.
                </p>
      
                <div className="flex w-full md:w-auto bg-white rounded-md overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 text-sm text-gray-800 rounded-l-md focus:outline-none w-full md:w-64"
                  />
                  <button className="bg-[#b88912] hover:bg-[#a67d10] text-white text-sm font-medium px-4 rounded-r-md transition">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
      
    </>
  )
}

export default Topfooter ;
