function TeamCardBig({ src, position, name, link }) {
  return (
    <div className="tb:w-1/3 border border-neutral-400 rounded-lg group">
      <div className="flex flex-col ms:h-[10rem] ml:h-[14rem] sm:h-[16rem] tb:h-[24rem] lg:h-[26rem] xl:h-[28rem] dxl:h-[32rem] txl:h-[36rem] overflow-hidden">
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:brightness-50"
            alt={name}
          />
          <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="h-12 w-12 text-gray-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{' '}
                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="12"
                />{' '}
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-2 border-t rounded-lg">
        <p className="text-center text-sm sm:text-md lg:text-lg text-neutral-500">
          {position}
        </p>
        <p className="text-center text-sm sm:text-md lg:text-lg">{name}</p>
      </div>
    </div>
  )
}

function TeamCardSmall({ src, position, name, link }) {
  return (
    <div className="border border-neutral-400 rounded-lg">
      <div className="flex flex-col ms:h-[10rem] ml:h-[14rem] sm:h-[16rem] tb:h-[18rem] lg:h-[20rem] xl:h-[24rem] dxl:h-[28rem] txl:h-[32rem] overflow-hidden group">
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:brightness-50"
            alt={name}
          />
          <div className="cursor-pointer absolute inset-0 flex justify-center items-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="h-12 w-12 text-gray-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{' '}
                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="12"
                />{' '}
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-2 border-t rounded-lg">
        <p className="text-center text-sm sm:text-md lg:text-lg text-neutral-500">
          {position}
        </p>
        <p className="text-center text-sm sm:text-md lg:text-lg">{name}</p>
      </div>
    </div>
  )
}

export { TeamCardBig, TeamCardSmall }
