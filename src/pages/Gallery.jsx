import { Suspense } from "react";
import GalleryCard from "../components/GalleryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as images from "../components/images.jsx";

// Loading skeleton for gallery sections
const GallerySectionSkeleton = () => (
  <div className="overflow-hidden ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="mb-6 bg-gray-200 animate-pulse rounded-md"
        style={{ height: `${Math.random() * 200 + 200}px` }}
      />
    ))}
  </div>
);

// Gallery section component
const GallerySection = ({ title, imageArray }) => (
  <div>
    <div className="text-center my-8">
      <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-6 text-gray-800 relative inline-block">
        {title}
        <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
      </h2>
    </div>
    <Suspense fallback={<GallerySectionSkeleton />}>
      <div className="overflow-hidden ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
        {imageArray.map((imageData) => (
          <GalleryCard key={imageData.id} imageData={imageData} />
        ))}
      </div>
    </Suspense>
  </div>
);

function Gallery() {
  const galleryData = [
    { title: "Luminaire 2025", images: images.Luminaire25 },
    { title: "Hera Pheri Phirse 2025", images: images.HeraPheriPhirse },
    { title: "Pantheon 2024", images: images.Pantheon24Images },
    { title: "Industrial Visit", images: images.IndustrialVisitImages },
    { title: "Webinar Session", images: images.WebinarSession },
    { title: "Spin The Wheel", images: images.SpinTheWheelImages },
    { title: "Invictus", images: images.InvictusImages },
    { title: "Phir Hera Pheri", images: images.PhirHeraPheriImages },
  ];

  return (
    <div id="gallery">
      <Navbar />
      
      {galleryData.map((section, index) => (
        <GallerySection
          key={index}
          title={section.title}
          imageArray={section.images}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Gallery;
