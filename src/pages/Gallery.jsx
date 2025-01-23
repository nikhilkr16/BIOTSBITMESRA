import GalleryCard from "../components/GalleryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as images from "../components/images.jsx";

function Gallery() {
  return (
    <div id="gallery">
      <Navbar />

      <div className="text-center my-8 ">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-6 text-gray-800 relative inline-block">
          Pantheon 2024
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="overflow-hidden ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
        {images.Pantheon24Images.map((image) => (
          <GalleryCard key={image.id} src={image.src} />
        ))}
      </div>

      <div className="text-center my-8">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          Industrial Visit
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
        {images.IndustrialVisitImages.map((image) => (
          <GalleryCard key={image.id} src={image.src} />
        ))}
      </div>

      <div className="text-center my-8">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          Webinar Session
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
        {images.WebinarSession.map((image) => (
          <GalleryCard key={image.id} src={image.src} />
        ))}
      </div>

      <div className="text-center my-8">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          Spin The Wheel
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
        {images.SpinTheWheelImages.map((image) => (
          <GalleryCard key={image.id} src={image.src} />
        ))}
      </div>

      <div className="text-center my-8">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          Invictus
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
        {images.InvictusImages.map((image) => (
          <GalleryCard key={image.id} src={image.src} />
        ))}
      </div>

      <div className="text-center my-8">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          Phir Hera Pheri
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="ms:columns-1 ms:gap-4 ms:px-6 ff:columns-2 ff:gap-4 ff:px-6 tb:columns-3 tb:gap-6 tb:px-8 lg:columns-4 lg:gap-6 lg:px-10">
        {images.PhirHeraPheriImages.map((image) => (
          <GalleryCard key={image.id} src={image.src} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
