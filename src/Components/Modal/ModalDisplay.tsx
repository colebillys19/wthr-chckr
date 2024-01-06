import { CSSProperties, MouseEvent, useEffect } from "react";

import { useGlobalState } from "../../context";
import SetLocationModal from "./SetLocationModal";
import TempModal from "./TempModal";

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

type ModalProps = {
  activeModal: string;
};

function ModalDisplay({ activeModal }: ModalProps) {
  const { setActiveModal } = useGlobalState();

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
    <div id="deed" onClick={handleBackdropClick} style={tempStyles}>
      {activeModal === "setLocation" && <SetLocationModal />}
      {activeModal === "temp" && <TempModal />}
    </div>
  );
}

export default ModalDisplay;
