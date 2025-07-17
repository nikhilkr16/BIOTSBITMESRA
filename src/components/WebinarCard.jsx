const WebinarCard = () => {
  return (
    <div className=" max-w-[90vw] space-y-6 mx-auto my-10">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* WEBINAR SESSION ABHISHEK_CHOUDHARY */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="ABHISHEK_CHOUDHARY.png"
            alt="webinar_abhishek_choudhary"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                WEBINAR SESSION ON IPR
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                An eye opening session on "Intellectual Property Right" that will empower you to protect your creations and enhance your business or personal brand. Featuring Mr. Abhishek Choudhury, an Indian Patent Agent and a serial entrepreneur and Mr. Nitesh Prasad - @corporate.wala.youtuber
              </p>
            </div>
          </div>
        </div>

        {/* WEBINAR SESSION NITESH PRASHAD */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="NITESH_PRASHAD.png"
            alt="webinar-nitesh-prashad"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                WEBINAR SESSION
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                As part of our flagship event LUMINAIRE, BIOTS presents a guest session with 
                Mr. Nitesh Prasad (@corporate.wala.youtuber) — career coach, former PwC and 
                Microsoft professional, and content creator with 490K+ followers. Gained practical 
                insights on leadership, skill-building, and career planning that will help shape your 
                professional journey.
              </p>
            </div>
          </div>
        </div>

        {/* WEBINAR SESSION */}
        <div className="relative group w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src="rahul_thakur.jpg"
            alt="webinar-rahul-thakur"
            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <div className="text-center">
              <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
                WEBINAR ON CARRERS IN RESEARCH & BIOTECHNOLOGY
              </h2>
              <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
                A special session with Mr. Rahul Thakur, an accomplished researcher from UPenn, NIIMBL, 
                and Rutgers University, and an alumnus of BIT Mesra’s 2016 batch, on UNLOCK THE FUTURE 
                IN BIOTECHNOLOGY: Opportunities & Beyond.  With deep expertise in research and entrepreneurship, 
                Mr. Thakur will shed light on emerging career paths in biotechnology and the power of innovation.
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
      </div>
    </div>
  )
}

export default WebinarCard
