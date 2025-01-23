import React from 'react'

const QuizEventCard = () => {
  return (
    <div className=" max-w-[90vw] space-y-6 mx-auto my-10">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* INVICTUS CARD */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="Invictus.jpg"
            alt="Invictus"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                INVICTUS
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                Invictus is an exciting quizzing competition that challenges
                teams across domains like entertainment, technology, sports, and
                current affairs, sparking excitement and celebrating intellect
                and learning.
              </p>
            </div>
          </div>
        </div>

        {/* WIKI WARS CARD */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="Wiki-Wars.jpg"
            alt="Wiki Wars"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                WIKI WARS
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                Wiki Wars is a fast-paced game where players navigate Wikipedia
                pages, using links to reach a target page in the fewest clicks
                and within a limited time, without using a keyboard.
              </p>
            </div>
          </div>
        </div>

        {/* MITACS WEBINAR CARD */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="MITACS Webinar.jpg"
            alt="MITACS Webinar"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                MITACS-WEBINAR
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                The Mitacs Webinar, organized by BIOTS, provided insights into
                the Mitacs Globalink Research Internship, funded by the Canadian
                government. It guided students on research experiences, skill
                development, and global collaborations, while mentoring them on
                applying for the internship to enhance their academic and
                analytical abilities.
              </p>
            </div>
          </div>
        </div>

        {/* BIOMEME CARD */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="Bio-Meme.jpg"
            alt="Bio Meme"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                BIOMEME
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                Biomeme invites memesters and comic geniuses to create memes
                that blend creativity, humor, and biological facts, making
                science fun and accessible for all.
              </p>
            </div>
          </div>
        </div>

        {/* PHIR HERA PHERI CARD */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="PhirHeraPheri.jpg"
            alt="Phir Hera Pheri"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                PHIR HERA PHERI
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                Phir Hera Pheri is an exciting treasure hunt that challenges
                participants to crack cryptic clues, navigate thrilling
                adventures, and work as a team to uncover the treasure. It’s a
                journey of exploration, perseverance, and teamwork.
              </p>
            </div>
          </div>
        </div>

        {/* SPIN THE WHEEL CARD */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="SpinTheWheel.jpg"
            alt="Spin the Wheel"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                SPIN THE WHEEL
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                Spin the Wheel is a fun, interactive event where movie
                enthusiasts create unique narratives and roleplay mismatched
                characters, using creativity and storytelling to think outside
                the box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizEventCard
