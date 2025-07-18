const events = [
  { imgUrl: "herapheriphirse.png" },
  { imgUrl: "lol_challenge.png" },
  { imgUrl: "forensic_mind.jpg" },
  { imgUrl: "MIND_CRAFT.png"},
  { imgUrl: "ABHISHEK_CHOUDHARY.png" },
  { imgUrl: "NITESH_PRASHAD.png" },
  { imgUrl: "rahul_thakur.jpg" },
  { imgUrl: "Invictus.jpg" },
  { imgUrl: "Wiki-Wars.jpg" },
  { imgUrl: "MITACS Webinar.jpg" },
  { imgUrl: "Bio-Meme.jpg" },
  { imgUrl: "PhirHeraPheri.jpg" },
  { imgUrl: "SpinTheWheel.jpg" }
];

const EventsSection = () => {
  return (
    <section
      id="eventSection"
      className=" w-full overflow-hidden text-center ms:my-6 tb:my-8 lg:my-10"
    >
      <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
        EVENTS
        <span className="block ms:w-30 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
      </h2>

      <div className="main-event">
        <a href="events">
          <img
            src="poster_luminaire.jpg"
            alt="Main Event"
            className="cursor-pointer w-3/6 mx-auto shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </a>
      </div>
      <div>
        <MarqueeSection />
      </div>
    </section>
  )
}

const MarqueeSection = () => {
  return (
    <a href="events">
      <div className="mx-auto relative flex overflow-x-hidden mb-20 ms:mt-8 tb:mt-10 xl:mt-12">
        <div className="animate-marquee whitespace-nowrap flex ms:gap-2 sm:gap-4 tb:gab-6 lg:gap-8">
          {[...events, ...events].map((event, i) => (
            <EventMarqueeCard key={i} imgUrl={event.imgUrl} />
          ))}
        </div>
      </div>
    </a>
  );
};

const EventMarqueeCard = ({ imgUrl }) => {
  return (
    <div className="w-max">
      <img
        src={imgUrl}
        className="object-cover mx-auto rounded-sm ms:w-20 ms:h-20 sm:w-24 sm:h-24 ff:w-30 ff:h-30 tb:w-36 tb:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 dxl:w-64 dxl:h-64 txl:w-72 txl:h-72 aspect-square ms:mb-2 xl:mb-4 dxl:mb-6"
      />
    </div>
  )
}

export default EventsSection
