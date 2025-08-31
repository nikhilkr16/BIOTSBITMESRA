import React, { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Ritik Raj",
    role: "President",
    message:
      "As the President of the Finance Club, it is my greatest honor to manage a team of 100+ members. The solidarity between every member of the association is something we are really proud of. Through workshops, interactive events, and collaborative projects, we strive to make learning both engaging and meaningful. This club feels like a second family, with supportive seniors, encouraging peers, and juniors who feel like close companions.",
    image: "pres.png",
  },
  {
    id: 2,
    name: "Komal Rani",
    role: "Vice President",
    message:
      "As the Vice President of BIOTS, I am privileged to support and work alongside a talented team committed to innovation, collaboration, and growth. The club provides a dynamic platform for students to explore their interests, develop skills, and contribute meaningfully. Together, we strive to inspire, empower, and drive excellence, creating a lasting impact within and beyond our campus.",
    image: "vice_pres.jpg",
  },
  {
    id: 3,
    name: "Muaaz Murshid",
    role: "Director of Media Development",
    message:
      "I am the Director of Media at BIOTS , where I channel my passion for creativity into designing engaging visuals, innovative content, and impactful media that truly represents our community.",
    image: "dir_of_med_dev.jpeg",
  },
  {
    id: 4,
    name: "Sanjana Kumari",
    role: "Director of Content Development",
    message:
      "I am the Director of Content Development in the Biotechnology Technical Club. My role involves creating and organizing technical content for seminars, workshops, and events. This experience has enhanced my understanding of biotechnology while strengthening my skills in technical writing, teamwork, and leadership.",
    image: "dir_of_cont_dev.jpg",
  },
  {
    id: 5,
    name: "Divya Barnwal",
    role: "Director of Communications & Public Relations",
    message:
      "As the Director of Communication and Public Relations at the Biots Club, I manage internal and external communications, oversee branding, and promote events through strategic outreach. My role involves building industry and academic connections, creating impactful content, and ensuring smooth coordination among members, thereby strengthening the club’s presence and engagement within the student and professional community.",
    image: "dir_of_comm_and_pub_rel.jpg",
  },
  {
    id: 6,
    name: "Prathama Barman",
    role: "General Secretary",
    message:
      "As one of the general secretaries of the BIOTS club, it will allow me to channel my dedication, leadership, and passion for this club and also strengthening our community. With a commitment to teamwork and effective coordination, I aim to ensure smooth functioning of the club while creating engaging opportunities for every member to grow and contribute.",
    image: "gen_sec1.jpg",
  },
  {
    id: 7,
    name: "Aman Sharma",
    role: "General Secretary",
    message:
      "As the General Secretary of the BIOTS Club, I feel privileged to guide a community that thrives on curiosity and collaboration. Our workshops, hands-on sessions, and interactive events are designed to spark interest and make learning an enjoyable journey. What makes this club truly special is the bond we share seniors who mentor selflessly, peers who motivate one another, and juniors who bring fresh energy and warmth, making the club feel like a close-knit family.",
    image: "gen_sec2.jpg",
  },
  {
    id: 8,
    name: "Ronit Rawani",
    role: "Joint Secretary",
    message:
      "As Joint Secretary of BIOTS, BIT Mesra, I have had the opportunity to contribute to the club’s growth while developing leadership and teamwork skills. With constant support from faculty and alumni, we strive to create a platform that blends knowledge, creativity, and collaboration, empowering students to explore biotechnology and prepare for impactful careers.",
    image: "joint_sec1.jpg",
  },
  {
    id: 9,
    name: "Sakshi Shyama",
    role: "Joint Secretary",
    message:
      "As the Joint Secretary of the BIOTS Club , I'm committed to contributing to a community that blends science , creativity and teamwork ",
    image: "joint_sec2.jpg",
  },
  {
    id: 10,
    name: "Purushottam Kumar",
    role: "Treasurer",
    message:
      "As Treasurer of BIOTS, I ensure our ideas are supported with the right resources. My role goes beyond managing funds—it’s about enabling innovation, teamwork, and opportunities for every member. Together, we strive to grow as individuals and as a community, building a culture of excellence and shared success.",
    image: "tres.jpg",
  },
  {
    id: 11,
    name: "Shubhayu Mukherjee",
    role: "Joint Treasurer",
    message:
      "Shubhayu Mukherjee, Joint Treasurer at BIT Mesra, combines financial management skills with a strong background in entrepreneurship. With experience leading startups and innovative projects, he excels in problem-solving, resource allocation, and strategic planning, ensuring impactful contributions to organizational and entrepreneurial initiatives.",
    image: "joint_tres.jpg",
  },
  {
    id: 12,
    name: "Shruti Suman",
    role: "Head of Event Operations",
    message:
      "As Head of Event Operations, I strive to transform ideas into vibrant events that inspire, connect, and energize our members as well as participants. My focus is on creating memorable experiences that unite the BIOTS Club and drive our vision forward.",
    image: "head_of_event_ops.jpg",
  },
  {
    id: 13,
    name: "Apurva Aryan",
    role: "Head of Creative Production",
    message:
      "I bring visions to life where form meets emotion and strategy dances with imagination. Guided by the belief that “Design is intelligence made visible,” I craft narratives through aesthetics that resonate deeply. My leadership blends innovation with intention, creating experiences that not only look good—but feel unforgettable. “Creativity is my language, design is my voice.”",
    image: "head_of_creat_prod.jpg",
  },
  {
    id: 14,
    name: "Tanish Gupta",
    role: "Head of Editorial Content",
    message:
      "Hi, I’m Tanish Gupta, Head of Editorial Content at BIOTS Club, BIT Mesra. I lead our content team in creating articles and features that highlight the club’s activities, under the guidance of the Director of Content Development. Outside BIOTS, I enjoy reading novels, articles, and research papers, while pursuing my B.Tech in Biotechnology.",
    image: "head_of_edit_cont.jpg",
  },
  {
    id: 15,
    name: "Purnendu",
    role: "Head Webmaster",
    message:
      "Since 2024, when I joined this club, I have learnt a lot from my seniors as well as my fellow members, about collaborating in teams and volunteering, as well as strengthening my own knowledge in the fields of Design and Web Development.",
    image: "head_webm.jpg",
  },
  {
    id: 16,
    name: "Kanak Khadikar",
    role: "Head of Sponsorship and Partnerships",
    message:
      "As Head of Sponsorships and Partnerships, I focus on building strong corporate relations and securing meaningful collaborations that add value to both partners and our organization. My role involves strategizing sponsorship opportunities, negotiating deals, and ensuring mutually beneficial outcomes that drive growth, engagement, and long-term associations while enhancing the overall impact of our initiatives.",
    image: "head_of_spons_and_part.jpg",
  },
  {
    id: 17,
    name: "Komal Kumari",
    role: "Head of Public Engagement",
    message:
      "As Head of Public Engagement at BIOTS, I am committed to fostering collaboration and meaningful connections. BIOTS represents innovation, growth, and impact, and I am proud to contribute to its mission of empowering individuals and communities to achieve excellence together.",
    image: "head_of_pub_eng.jpg",
  },
  {
    id: 18,
    name: "Sanjana Kumari",
    role: "Executive Member",
    message:
      "I am an executive member of the Biotechnology Club, where I have actively contributed to organizing various events. Some of the events I helped with include Phir Hera Pheri and Wiki Wars. Being part of the club has given me valuable experience in teamwork, event management, and leadership. It has been a great opportunity to engage with fellow members and promote interest in biotechnology.",
    image: "exec_mem.jpg",
  },
];

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
