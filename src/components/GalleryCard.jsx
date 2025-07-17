import Modal from "react-modal";
import { useState, useEffect, Suspense } from "react";
import LazyImage from "./LazyImage";
import useClickOutside from "../hooks/useClickOutside";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    display: "flex",
    height: "90vh",
    width: "90vw",
    overflow: "hidden",
  },
};

Modal.setAppElement(document.getElementById("root"));

// Loading skeleton for modal
const ModalImageSkeleton = () => (
  <div className="mx-auto bg-gray-200 animate-pulse max-h-[100%] max-w-[100%] flex items-center justify-center min-h-[50vh]">
    <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function GalleryCard({ imageData }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 540);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.color = "#f00"; // This seems to be from old code, remove if not needed
  }

  const dropRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className="mb-6 cursor-pointer" onClick={openModal}>
      <div>
        {isDesktop && (
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Gallery Image Modal"
            className="modal-card bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-5"
            overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <Suspense fallback={<ModalImageSkeleton />}>
              <LazyImage
                imageData={imageData}
                className="mx-auto object-contain max-h-[100%] max-w-[100%]"
                alt={`Gallery image ${imageData.id}`}
              />
            </Suspense>
          </Modal>
        )}
      </div>

      <LazyImage
        imageData={imageData}
        className="w-full rounded-md"
        alt={`Gallery thumbnail ${imageData.id}`}
      />
    </div>
  );
}

export default GalleryCard;
