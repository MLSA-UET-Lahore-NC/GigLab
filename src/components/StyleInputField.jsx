import React from 'react'

const StyleInputField = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up for Our Newsletter</h2>

        <form className="space-y-4">
          {/* Name Fields */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="first-name">
              Your Name
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="w-1/2 p-3 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="w-1/2 p-3 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="yourname@company.com"
              className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default StyleInputField
