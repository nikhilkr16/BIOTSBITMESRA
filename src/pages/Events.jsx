import QuizEventCard from "../components/EventCard";
import React from "react";
import FlagshipCard from "../components/Flagship";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventCard = () => {
  return (
    <div id="events">
      <Navbar />
      <div className="text-center mt-10">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          EVENTS
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <FlagshipCard />
      <QuizEventCard />
      <Footer />
    </div>
  );
};

export default EventCard;
