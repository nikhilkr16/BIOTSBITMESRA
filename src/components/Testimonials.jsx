import React, { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Aditi Singh',
    role: 'President',
    message:
      'As the President of BIOTS, I am honored to lead a team dedicated to innovation, collaboration, and growth. Our club fosters a vibrant community where students explore their passions, gain skills, and make meaningful contributions. Together, we aim to inspire, empower, and achieve excellence, creating lasting impacts within and beyond our campus.',
    image: 'AditiSingh_President.png',
  },
  {
    id: 2,
    name: 'Chinmay Ajit Patade',
    role: 'Joint President',
    message:
      'It was a great pleasure to lead and learn with the team of BIOTS, which has exhibited its team spirit from time to time. Under the invaluable guidance of esteemed alumni and faculty advisors, the club has flourished over the period of a few years. BIOTS has the potential to become one of the most representable clubs of BIT Mesra. It will serve as a guiding light for those navigating their careers in biotechnology and beyond. Striking the right balance of fun and learning, it has successfully conquered the minds at BIT and we hope to continue doing so!',
    image: 'CHINMAYPATADE_JointPresident.jpg',
  },
  {
    id: 3,
    name: 'Ayush Kumar',
    role: 'Vice President',
    message:
      'As the Vice President of Biots Club, BIT Mesra, I am passionate about advancing the frontiers of biotechnology and fostering a collaborative environment for students to explore innovative solutions. My role involves organizing events, workshops, and collaborative projects aimed at enhancing technical knowledge and practical skills in biotechnology. I am dedicated to making the Biots Club a platform for learning, creativity, and professional growth for all its members.',
    image: 'AyushKumar_VicePres.jpg',
  },
  {
    id: 4,
    name: 'Aryan Raj',
    role: 'Technical Head',
    message:
      "As the Technical Head of BIOTS Club, I oversee and guide the technical endeavors of our team, ensuring excellence in managing our digital platforms, including the website. My role is to mentor the technical team, foster innovation, and maintain a robust online presence that reflects our club's vision and commitment to biotechnology advancements.",
    image: 'AryanRajsaxena_TechHead.jpg',
  },
  {
    id: 5,
    name: 'Ritik Raj',
    role: 'General Secretary',
    message:
      'As the General Secretary of BIOTS Club, I am honored to lead a vibrant community of 75+ enthusiastic members. Through workshops, interactive events, and collaborative projects, we strive to make learning both engaging and meaningful. This club feels like a second family, with supportive seniors, encouraging peers, and juniors who feel like close companions.',
    image: 'RitikRaj_GenSec.jpg',
  },
  {
    id: 6,
    name: 'Ekika Kumari',
    role: 'Joint Secretary',
    message:
      'I am delighted and honored to be a part of such a cohesive and empowered team that we are at BIOTS. We are a community of passionate and driven individuals who bring out the best in one another. Together, we strive to foster creativity, push boundaries and collaborate to create an impact.',
    image: 'EkikaKumar_JointSec.jpg',
  },
  {
    id: 7,
    name: 'Aditya Ingale',
    role: 'Treasurer',
    message:
      'As the treasurer of Biots, it has been my honor to work alongside all the members who have now become a family. This club brings biology to life through fun and creative activities, making every moment engaging and memorable. Biots is truly a rollercoaster of emotions, where you’ll find some of the best peers of your undergraduate journey.',
    image: 'AdityaIngale_Treasurer.jpg',
  },
  {
    id: 8,
    name: 'Komal Rani',
    role: 'Event Coordinator',
    message:
      "I have been actively involved in organizing events for the BIOTS Club. I help plan and manage different activities, work with the team, and make sure everything runs smoothly. My efforts aim to create meaningful and engaging events that bring our club members together and support the club's goals.",
    image: 'KomalRani_EventCoord.jpg',
  },
  {
    id: 8,
    name: 'Harsh Verma',
    role: 'Creative Coordinator',
    message:
      'As the Creative Coordinator of BIOTS Club, I bring ideas to life through engaging designs and innovative content. From conceptualizing event themes to curating our visual identity, my role is to ensure every creative aspect resonates with the spirit of our club, inspiring members and showcasing the endless possibilities of biotechnology.',
    image: 'HarshVerma_CreativeCoord.jpg',
  },
  {
    id: 9,
    name: 'Muaaz Murshid',
    role: 'Creative Coordinator',
    message:
      'As the Creative Coordinator of BIOTS Club, I blend creativity with strategy to craft designs that captivate and communicate our vision. From event posters to innovative branding, I ensure every visual element enhances our identity. With attention to detail and a passion for fresh ideas, I aim to make our club stand out creatively and inspire our audience.',
    image: 'MuaazMurshid_CreativeCoord.jpeg',
  },
  {
    id: 10,
    name: 'Nikhil Kumar',
    role: 'Technical Coordinator',
    message:
      "As the Technical Coordinator of BIOTS Club, I take pride in managing our club's digital presence, including our website and technical resources. My role involves ensuring seamless communication and accessibility for all members. Through constant updates and innovations, I aim to make our online platform a hub for knowledge, collaboration, and growth in biotechnology",
    image: 'NikhilKumar_TechCord.png',
  },
  {
    id: 11,
    name: 'Saket Kumar',
    role: 'Executive Member',
    message:
      'As a member of the BIOTS Club, I have had the opportunity to engage in a unique interdisciplinary environment where science, technology, and societal impact converge. My involvement with the BIOTS Club has allowed me to explore cutting-edge topics in science, organization management and being member of a family.',
    image: 'SaketKumar_ExeMember.jpg',
  },
  {
    id: 12,
    name: 'Sanjana Kumari',
    role: 'Executive Member',
    message:
      'I had volunteered for Hera Pheri, Spin the Wheel, and Wiki Wars, all of which had an excellent turnout and were highly engaging games. My efforts contributed to ensuring the smooth execution of these activities and enhancing the overall experience for the participants. It was truly fulfilling to be part of such an exciting and well-received set of events.',
    image: 'SanjanaKumari_ExeMember.jpg',
  },
  {
    id: 13,
    name: 'Adya Pandey',
    role: 'Executive Member',
    message:
      'My time as an executive member of Biots was incredibly rewarding. I honed crucial leadership, communication, and organizational skills while collaborating with a talented team. The club fostered my passions, pushed me beyond my limits, and enabled me to contribute positively to campus life. I am thankful for the personal and professional growth this experience facilitated.',
    image: 'AdyaPandey_ExeMember.jpg',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    )
  }
  return (
    <div className=" w-full ms:my-6 tb:my-8 lg:my-10">
      <div className="relative mx-auto text-center font-sans">
        <h2 className="relative ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-12 tb:mb-14 lg:mb-14 text-gray-800 relative inline-block">
          TESTIMONIALS
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>

        <div className="grid grid-rows-1">
          <div className="flex justify-center relative">
            {/* Testimonial Box */}
            <div className="ms:w-3/4 sm:w-8/12 ms:h-full tb:h-64  bg-neutral-700 text-neutral-50 rounded-lg flex items-center justify-center p-5 relative shadow-lg">
              {/* Quote Icon */}
              <svg
                className="absolute ms:-top-10 ms:-left-4 lg:-top-12 lg:-left-6 ms:h-16 tb:h-18 lg:h-20"
                enable-background="new 796 698 200 200"
                viewBox="796 698 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m885.208 749.739v-40.948c-49.189 0-89.208 40.019-89.208 89.209v89.209h89.208v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />
                <path d="m996 749.739v-40.948c-49.19 0-89.209 40.019-89.209 89.209v89.209h89.209v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />
              </svg>

              {/* Content */}
              <div className="grid grid-cols-1 place-items-center tb:flex tb:items-center text-justify">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="ms:w-20 ms:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 dxl:w-32 dxl:h-32 txl:w-36 txl:h-36 aspect-square rounded-full object-cover ms:mb-3 tb:mb-0 tb:mr-5 sm:mb-4"
                />
                <div>
                  <h3 className="ms:text-base tb:text-lg lg:text-xl ms:text-center tb:text-justify font-bold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="ms:text-xs tb:text-sm lg:text-md ms:text-center tb:text-justify text-gray-300 mb-2">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="ms:text-sm tb:text-md lg:text-base leading-relaxed">
                    {testimonials[currentIndex].message}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className>
            <div className="flex items-center justify-center relative mt-4">
              <button
                onClick={handlePrev}
                className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
              >
                <svg
                  className="ms:h-6 ms:w-6 ml:h-8 ml:w-8 text-gray-800"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                  />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`ms:w-1.5 ms:h-1.5 ml:w-2.5 ml:h-2.5 mx-1 rounded-full cursor-pointer ${
                    index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
              <button
                onClick={handleNext}
                className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
              >
                <svg
                  className="ms:h-6 ms:w-6 ml:h-8 ml:w-8 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
