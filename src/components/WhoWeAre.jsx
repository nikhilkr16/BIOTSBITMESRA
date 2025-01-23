import React from 'react'

const WhoWeAre = () => {
  return (
    <div>
      <div className="text-center ms:p-0 ff:p-4 sm:p-6 tb:p-8 font-sans lg:w-[90%] xl:w-[80%] mx-auto ">
        <div className="text-center mt-8 ">
          <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold  text-gray-800 relative inline-block">
            WHO WE ARE
            <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center ms:my-4 my-10 lg:mb-20 space-y-10 lg:space-y-0">
          <div className="flex-1 mx-5 p-6 bg-white rounded-lg shadow-xl transform lg:hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="ms:text-base ff:text-lg tb:text-2xl font-semibold ms:mb-4 ff:mb-8 tracking-wider">
              ABOUT US
            </h2>
            <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-5">
              <div className="w-full lg:w-1/2">
                <img
                  src="main.jpeg"
                  alt="Institute building"
                  className="w-full rounded-lg shadow-2xl transform lg:hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <p className="leading-8 ms:text-xs ml:text-sm ff:text-base tb:text-md text-lg text-justify">
                  BIOTS is dedicated to advancing biotechnology through
                  education and innovation. Founded in 2017, our mission is to
                  provide a dynamic platform for students to engage with
                  cutting-edge biotechnological developments and contribute to
                  solving real-world problems. We host a variety of webinars and
                  seminars focusing on research and prospects in biotechnology,
                  offering invaluable learning opportunities and fostering a
                  vibrant community for future engineers and entrepreneurs.
                  Through these activities, BIOTS aims to foster innovation,
                  nurture talent, and drive progress across all realms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center ms:my-4 my-10 lg:mb-20 space-y-10 lg:space-y-0">
          <div className="flex-1 mx-5 p-6 bg-white rounded-lg shadow-xl transform lg:hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="ms:text-base ff:text-lg tb:text-2xl font-semibold ms:mb-4 ff:mb-8 tracking-wider">
              VISION
            </h2>
            <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-5">
              <div className="w-full lg:w-1/2 text-left">
                <p className="leading-8 ms:text-xs ml:text-sm ff:text-base tb:text-md text-lg text-justify">
                  To be a leading community for biotechnologists, fostering
                  innovation and professional growth. We believe in focusing on
                  the development of knowledge, skills, networks, and shaping
                  experiences that are integral for success in the professional
                  world.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src="dna.webp"
                  alt="Institute building"
                  className="w-full rounded-lg shadow-2xl transform lg:hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
