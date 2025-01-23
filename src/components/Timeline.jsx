import React from 'react'

function Timeline() {
  const timelineData = [
    {
      id: 1,
      title: 'INDUSTRIAL VISIT',
      description:
        'The industrial visit organized by the Society of Biotechnologists to Sudha Dairy, Ranchi was full of valuable insights into the dairy production process and sampling of fresh dairy products.',
      image: '6.jpg',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-800',
    },
    {
      id: 2,
      title: 'INTERNATIONAL CONFERENCE',
      description:
        "The Department of Bioengineering and Biotechnology, BIT Mesra, in association with Society of Biotechnologists (BIOTS), is thrilled to invite you to our International Conference on 'Emerging Trends in Translational Bioinformatics' (ET2B), happening from December 5th to 7th, 2024, at our picturesque campus in Ranchi, India.",
      image: 'et2b.jpg',
      bgColor: 'bg-gray-500',
      textColor: 'text-white',
    },
    {
      id: 3,
      title: 'WEBINAR SESSION',
      description:
        'The session with Mr. Rahul Thakur was packed with insights and understanding. His guidance and mentorship were truly invaluable for all the students.',
      image: '84.jpg',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-800',
    },
  ]

  return (
    <div>
      <div className="text-center mt-8 ">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold  text-gray-800 relative inline-block">
          2024
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="ms:hidden sm:block sm:w-full tb:w-[95%] lg:w-[90%] xl:w-[80%] mx-auto">
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical line */}
          <div
            className="z-0 absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700"
            style={{ top: 'calc(2rem + 1rem)', bottom: 'calc(2rem + 1rem)' }}
          ></div>

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? 'right-timeline'
                  : 'left-timeline flex-row-reverse'
              }`}
            >
              <div className="order-0 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {item.id}
                </h1>
              </div>
              <div
                className={`order-1 ${item.bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4`}
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className={`mb-3 font-bold ${item.textColor} text-xl`}>
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-snug tracking-wide ${item.textColor} text-opacity-100`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ms:block sm:hidden">
        <div className="relative wrap overflow-hidden p-10 h-full ms:w-[95%] ">
          {/* Vertical line */}
          <div
            className="z-0 absolute transform -translate-x-1/2 w-1 bg-gray-700"
            style={{ top: 'calc(2rem + 1rem)', bottom: 'calc(2rem + 1rem)' }}
          ></div>

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className="mb-8 flex justify-between items-center w-full ml-10"
            >
              <div className="absolute left-6 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold ms:text-base  text-white">
                  {item.id}
                </h1>
              </div>
              <div
                className={`order-1 ${item.bgColor} rounded-lg shadow-xl px-6 py-4`}
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3
                  className={`ms:mb-1 ms:text-base font-bold ${item.textColor} text-xl`}
                >
                  {item.title}
                </h3>
                <p
                  className={`ms:text-xs text-sm leading-snug tracking-wide ${item.textColor} text-opacity-100`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
