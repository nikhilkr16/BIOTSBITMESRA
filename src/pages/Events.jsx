import EventCard from "../components/EventCard";
import WebinarCard from "../components/WebinarCard";
import FlagshipCard from "../components/Flagship";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SpeakerSection from "../components/SpeakerSection";
import SponsorMarquee from "../components/SponsorMarquee";

const EventSubSection = () => {
  return (
    <div id="events">
      <Navbar />

      <div>
        <div className="mt-10 text-center">
          <h2 className="relative inline-block font-bold text-gray-800 ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl ms:mb-4 tb:mb-6 lg:mb-8">
            EVENTS
            <span className="block ms:w-30 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
          </h2>
        </div>
        <FlagshipCard />
        <EventCard />
      </div>

      <div>
        <div className="mt-20 text-center">
          <h2 className="relative inline-block font-bold text-gray-800 ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl ms:mb-4 tb:mb-6 lg:mb-8">
            WEBINARS & WORKSHOPS
            <span className="block ms:w-30 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
          </h2>
        </div>
        <WebinarCard />
      </div>

      <div>
        <div className="mt-20 text-center">
          <h2 className="relative inline-block font-bold text-gray-800 ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl ms:mb-4 tb:mb-6 lg:mb-8">
            OUR SPEAKERS
            <span className="block ms:w-30 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
          </h2>
        </div>
        <SpeakerSection />
      </div>

      <div>
        <div className="mt-20 text-center">
          <h2 className="relative inline-block font-bold text-gray-800 ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl ms:mb-4 tb:mb-6 lg:mb-8">
            OUR SPONSORS
            <span className="block ms:w-30 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
          </h2>
        </div>
				<SponsorMarquee />
      </div>

      <Footer />
    </div>
  );
};

export default EventSubSection;
