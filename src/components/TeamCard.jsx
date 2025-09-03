function TeamCardBig({ src, position, name, link, size = "normal" }) {
  const sizeClasses = size === "large" ? "max-w-[240px] sm:max-w-xs" : "max-w-[240px] sm:max-w-[280px]";
  return (
    <div className={`w-full ${sizeClasses} mx-auto border border-neutral-300 rounded-lg group shadow-md hover:shadow-lg transition-all duration-300 bg-white`}>
      <div className="flex flex-col aspect-[3/4] overflow-hidden rounded-t-lg"> 
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
            alt={name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          {link && (
            <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a href={link} target="_blank" rel="noreferrer">
                <svg
                  className="h-10 w-10 text-white drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="p-3 border-t border-neutral-200 bg-gradient-to-b from-white to-gray-50">
        <p className="text-center text-xs sm:text-sm font-medium text-neutral-600 mb-1 leading-tight">
          {position}
        </p>
        <p className="text-center text-sm sm:text-base font-semibold text-gray-800 leading-tight">
          {name}
        </p>
      </div>
    </div>
  )
}

function TeamCardSmall({ src, position, name, link }) {
  return (
    <div className="w-full border border-neutral-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
      <div className="flex flex-col aspect-[3/4] overflow-hidden rounded-t-lg"> 
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
            alt={name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          {link && (
            <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a href={link} target="_blank" rel="noreferrer">
                <svg
                  className="h-6 w-6 text-white drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="p-2 border-t border-neutral-200 bg-gradient-to-b from-white to-gray-50">
        <p className="text-center text-xs font-medium text-neutral-600 mb-1 leading-tight">
          {position}
        </p>
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
          {name}
        </p>
      </div>
    </div>
  )
}

export { TeamCardBig, TeamCardSmall }
