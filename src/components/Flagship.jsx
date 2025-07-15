import React from "react";

const FlagshipCard = () => {
  return (
    <div className="mx-8">
      <div className="relative group ms:w-fit xl:w-max xl:h-auto rounded-lg overflow-hidden shadow-lg mx-auto mb-10">
        <img
          src="poster_luminaire.jpg"
          alt="Card Image"
          className="xl:w-max xl:h-svh object-cover transition-all duration-300 sm:group-hover:blur-sm"
        />

        <div className="sm:absolute inset-0 flex items-center justify-center sm:bg-black sm:bg-opacity-50 sm:text-white sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 p-4">
          <div className="text-center ml:p-3 ff:p-6">
            <h2 className="ms:text-sm ml:text-md ff:text-lg sm:text-xl tb:text-2xl font-bold">
             LUMINAIRE
            </h2>
            <p className="mt-2 ms:text-xs ml:text-sm ff:text-base sm:text-md tb:text-lg">
              Luminaire, the flagship event of BIOTS Club, encompassing thrilling events such 
              as Forensic Minds and Mind Craft and Insightful Webinar Sessions with 
              Mr. Abhishek Choudhary and Mr. Nitesh Prasad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagshipCard;
