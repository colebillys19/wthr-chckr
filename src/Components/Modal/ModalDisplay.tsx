import { CSSProperties, MouseEvent, useEffect } from "react";

import { useGlobalState } from "../../context";
import ModalSetLocation from "./ModalSetLocation";
import ModalTemp from "./ModalTemp";

const tempStyles: CSSProperties = {
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  left: 0,
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 1,
};

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
  }, []);

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  return (
    <div onClick={handleBackdropClick} style={tempStyles}>
      {activeModal === "setLocation" && <ModalSetLocation />}
      {activeModal === "temp" && <ModalTemp />}
    </div>
  );
}

export default ModalDisplay;
