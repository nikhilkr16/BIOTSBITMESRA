function Hero() {
  return (
    <div className="relative w-full mx-auto">
      <img
        className="ms:h-50vh tb:h-[calc(100vh-5rem)] w-full object-cover"
        src="heroImage.jpg"
        alt="Random image"
      />
      <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="tb:mb-32 text-neutral-50 ms:text-2xl ml:text-3xl ff:text-4xl sm:text-5xl tb:text-5xl lg:text-7xl font-bold text-center">
          EMERGE. INNOVATE. LEAD
        </h2>
        <button
          className="ms:hidden tb:block bg-neutral-50 text-gray-800 border ms:px-4 ms:py-2.5 ff:px-5 ff:py-3 tb:text-lg font-bold rounded-md cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-gray-800 hover:text-white hover:scale-110 hover:shadow-lg"
          onClick={() => {
            document.getElementById('eventSection').scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          Let's Start
        </button>
      </div>
    </div>
  )
}

export default Hero
