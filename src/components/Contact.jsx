import { useForm } from '@formspree/react'
import React, { useEffect, useState } from 'react'
const apiKey = import.meta.env.VITE_API_KEY

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm(apiKey)

  useEffect(() => {
    if (state.succeeded) {
      alert('Submitted Successfully')
      reset
    }
  }, [state.succeeded])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div
      id="contact"
      className=" ms:w-[90%] tb:w-[80%] lg:w-[60%] mx-auto text-center font-sans m-10"
    >
      <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
        CONTACT US
        <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
      </h2>
      <div className="tb:flex">
        <div className=" flex-col justify-between sm:mx-3 w-2/4 ms:hidden tb:flex h-vh">
          <div>
            <img
              src="biot.png"
              className="tb:h-44 lg:h-52 mx-auto"
            />
          </div>
          <div className="flex justify-center gap-2 cursor-pointer tb:mb-2 lg:mb-0">
            <svg
              className="tb:h-8 tb:w-8 lg:h-10 lg:w-10 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="tb:text-md lg:text-xl my-auto font-medium text-neutral-800">
              biots@bitmesra.ac.in
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col ms:gap-2 tb:gap-4 ms:w-4/5 tb:w-4/5 mx-auto "
        >
          <div className="flex border border-gray-400 rounded-md ">
            <div className="px-2 m-auto border-r border-gray-400">
              <svg
                className="ff:h-7 ff:w-7 ms:h-5 ms:w-5 text-gray-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{' '}
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 ms:text-base ff:text-md  focus:outline-none focus:ring focus:ring-gray-400 transition"
              required
            />
          </div>
          <div className="flex border border-gray-400 rounded-md ">
            <div className="px-2 m-auto border-r border-gray-400">
              <svg
                className="ms:h-5 ms:w-5 ff:h-7 ff:w-7 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 ms:text-base ff:text-md focus:outline-none focus:ring focus:ring-gray-400 transition"
              required
            />
          </div>
          <div className="flex border border-gray-400 rounded-md ">
            <div className="px-2 m-auto border-r border-gray-400">
              <svg
                className="ms:h-5 ms:w-5 ff:h-7 ff:w-7 text-gray-800"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                />{' '}
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 ms:text-base ff:text-md  focus:outline-none focus:ring focus:ring-gray-400 transition"
            />
          </div>

          <div className="flex border border-gray-400 rounded-md ">
            <div className="ms:h-16 tb:h-[80%] grid place-content-center px-2 border-r border-gray-400 m-auto ">
              <svg
                className="ms:h-5 ms:w-5 ff:h-7 ff:w-7 text-gray-800  "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                />{' '}
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{' '}
                <line
                  x1="12"
                  y1="11"
                  x2="12"
                  y2="11.01"
                />{' '}
                <line
                  x1="8"
                  y1="11"
                  x2="8"
                  y2="11.01"
                />{' '}
                <line
                  x1="16"
                  y1="11"
                  x2="16"
                  y2="11.01"
                />
              </svg>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className=" w-full p-2 ms:text-base ff:text-md focus:outline-none focus:ring focus:ring-gray-400 transition resize-none ms:h-24 tb:h-36"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mx-auto ms:w-full mt-3 py-2 bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-300 text-neutral-800 ms:text-md tb:text-lg ls:text-xl font-medium p-2 rounded-md cursor-pointer hover:text-gray-100 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:shadow-xl transition"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
