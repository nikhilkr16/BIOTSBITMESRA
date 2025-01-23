import React from "react";

const FlagshipCard = () => {
  return (
    <div className="relative group w-[90vw] h-auto rounded-lg overflow-hidden shadow-lg mx-auto mb-10">
      <img
        src="Bitotsav.jpg"
        alt="Card Image"
        className="w-full h-auto object-cover transition-all duration-300 sm:group-hover:blur-sm"
      />

      <div className="sm:absolute inset-0 flex items-center justify-center sm:bg-black sm:bg-opacity-50 sm:text-white sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 p-4">
        <div className="text-center ml:p-3 ff:p-6">
          <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
            Flagship event
          </h2>
          <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
            This will be the description of the flagship event to be filled
            immediately as soon as the event details are provided. This will be
            the description of the flagship event to be filled immediately as
            soon as the event details are provided. This will be the description
            of the flagship event to be filled immediately as soon as the event
            details are provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlagshipCard;
