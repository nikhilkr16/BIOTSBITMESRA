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
            <Welcome />
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

function Welcome() {
  return (
    <div className="flex items-center justify-center gap-2">
      <h2 className="text-neutral-50 ms:text-2xl ml:text-3xl ff:text-4xl sm:text-5xl tb:text-5xl lg:text-7xl font-bold text-center">
        WELCOME K25s
      </h2>
      <span className="wave inline-block text-[1em] lg:text-[1.2em]">👋</span>

      {/* Tailwind custom animation styles */}
      <style jsx>{`
        .wave {
          animation-name: wave-animation;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

export default Hero
