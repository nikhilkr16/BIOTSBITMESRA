function TeamCardBig({ src, position, name, link }) {
  return (
    <div className="tb:w-1/3 xl:w-1/4 border border-neutral-400 rounded-lg group shadow-md">
      <div className="flex flex-col aspect-[1/1] overflow-hidden"> 
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:brightness-50"
            alt={name}
          />
          {link && (
            <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a href={link} target="_blank" rel="noreferrer">
                <svg
                  className="h-12 w-12 text-gray-100"
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
      <div className="p-3 border-t rounded-lg">
        <p className="text-center text-sm ms:text-sm ml:text-base ff:text-base sm:text-lg tb:text-lg lg:text-xl xl:text-2xl font-medium text-neutral-500">
          {position}
        </p>
        <p className="text-center text-base ms:text-sm ml:text-base ff:text-base sm:text-lg tb:text-lg lg:text-xl xl:text-2xl font-semibold">
          {name}
        </p>
      </div>
    </div>
  )
}

function TeamCardSmall({ src, position, name, link }) {
  return (
    <div className="border border-neutral-400 rounded-lg shadow-sm">
      <div className="flex flex-col aspect-[3/4] overflow-hidden group"> 
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:brightness-50"
            alt={name}
          />
          {link && (
            <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a href={link} target="_blank" rel="noreferrer">
                <svg
                  className="h-12 w-12 text-gray-100"
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
      <div className="p-2 border-t rounded-lg">
        <p className="text-center text-sm ms:text-sm ml:text-base ff:text-base sm:text-lg tb:text-lg lg:text-xl xl:text-2xl text-neutral-500">
          {position}
        </p>
          <p className="text-center text-base ms:text-sm ml:text-base ff:text-base sm:text-lg tb:text-lg lg:text-xl xl:text-2xl font-medium">
          {name}
        </p>
      </div>
    </div>
  )
}

export { TeamCardBig, TeamCardSmall }
