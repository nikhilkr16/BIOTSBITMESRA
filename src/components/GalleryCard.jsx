import Modal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";

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

function GalleryCard({ src }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // State to check screen size

  // Custom hook or useEffect to set screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 540); // Use `md` breakpoint for Tailwind
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
    subtitle.color = "#f00";
  }

  const dropRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className="mb-6 cursor-pointer" onClick={openModal}>
      <div>
        {isDesktop && (
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={dropRef}
            style={customStyles}
            contentLabel="Example Modal"
            className="modal-card bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-5"
            overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <img
              src={src}
              className="mx-auto object-contain max-h-[100%] max-w-[100%]"
            />
          </Modal>
        )}
      </div>

      <img src={src} className="w-full rounded-md" />
    </div>
  );
}

export default GalleryCard;
