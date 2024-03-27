import { MouseEvent, useContext, useEffect } from "react";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import ModalSetLocation from "./ModalSetLocation";
import ModalTemp from "./ModalTemp";

function ModalDisplay() {
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModal("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setActiveModal]);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen z-20 bg-black bg-opacity-30"
    >
      {activeModal === "setLocation" && <ModalSetLocation />}
      {activeModal === "temp" && <ModalTemp />}
    </div>
  );
}

export default ModalDisplay;
