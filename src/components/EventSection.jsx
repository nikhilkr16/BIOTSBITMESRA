import React from 'react'

const EventsSection = () => {
  return (
    <section
      id="eventSection"
      className=" w-full overflow-hidden text-center ms:my-6 tb:my-8 lg:my-10"
    >
      <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
        EVENTS
        <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
      </h2>

      <div className="main-event">
        <a href="events">
          <img
            src="Bitotsav.jpg"
            alt="Main Event"
            className="cursor-pointer w-3/5 mx-auto shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </a>
      </div>
      <div className="flex justify-center">
        <div className="lg:flex lg:justify-center w-3/5 lg:gap-5 mt-4">
          <div>
            <a href="events">
              <img
                src="event1.jpg"
                alt="Sub Event 1"
                className="ms:mb-4 sm:mb-8 lg:m-0 cursor-pointer w-fit h-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </a>
          </div>
          <div>
            <a href="events">
              <img
                src="event2.jpg"
                alt="Sub Event 2"
                className="ms:mb-4 sm:mb-8 lg:m-0 cursor-pointer w-fit h-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
