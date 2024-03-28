import { useEffect } from "react";

import SetLocationFlow from "../ComponentsShared/SetLocationFlow";
import CloseIcon from "../svg/iconSvgs/Components/Close";

type SetLocationModalPropsType = { setActiveModal: (value: string) => void };

function SetLocationModal({ setActiveModal }: SetLocationModalPropsType) {
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

  const handleClose = () => {
    setActiveModal("");
  };

  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-screen">
      <div className="bg-white border-b z-30 w-full max-w-screen-sm px-8 pt-6 pb-12">
        <div className="flex justify-end mb-6">
          <div className="flex h-6 items-center">
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div>
          <SetLocationFlow isModal />
        </div>
      </div>
    </div>
  );
}

export default SetLocationModal;
