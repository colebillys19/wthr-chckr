import { MouseEvent, useEffect } from "react";

import { useGlobalState } from "../../context";
import ModalSetLocation from "./ModalSetLocation";
import ModalTemp from "./ModalTemp";

function ModalDisplay() {
  const { activeModal, setActiveModal } = useGlobalState();

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

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  return (
    <div onClick={handleBackdropClick}>
      {activeModal === "setLocation" && <ModalSetLocation />}
      {activeModal === "temp" && <ModalTemp />}
    </div>
  );
}

export default ModalDisplay;
