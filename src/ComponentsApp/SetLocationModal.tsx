import { useEffect, useRef, useState } from "react";

import SetLocationFlow from "../ComponentsShared/SetLocationFlow";
import CloseIcon from "../svg/iconSvgs/Components/Close";

type SetLocationModalPropsType = { setActiveModal: (value: string) => void };

function SetLocationModal({ setActiveModal }: SetLocationModalPropsType) {
  const [hasMounted, setHasMounted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

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
      <div
        ref={containerRef}
        className="bg-white border-b z-30 w-full max-w-screen-sm px-8 pt-6 pb-12 opacity-0 duration-300 ease-in-out"
        style={hasMounted ? { opacity: 1 } : {}}
        tabIndex={-1}
      >
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
