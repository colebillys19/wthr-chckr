import { MouseEvent, useEffect } from "react";

import CloseIcon from "../../../svg/iconSvgs/Components/Close";
import SelectTime from "./SelectTime";
import SelectUnits from "./SelectUnits";

type MenuDesktopPropsType = {
  setIsDesktopMenuOpen: (value: boolean) => void;
};

function MenuDesktop({ setIsDesktopMenuOpen }: MenuDesktopPropsType) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDesktopMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsDesktopMenuOpen]);

  /*
   *
   */
  const handleCloseClick = () => {
    setIsDesktopMenuOpen(false);
  };

  /*
   *
   */
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsDesktopMenuOpen(false);
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="absolute top-0 right-0 w-screen h-screen z-10 bg-black bg-opacity-30"
    >
      <div className="absolute top-0 right-0 w-72 h-48 px-6 py-4 bg-white border-b border-l z-20">
        <div className="flex flex-col items-end gap-6">
          <div className="flex h-6 items-center">
            <button onClick={handleCloseClick}>
              <CloseIcon />
            </button>
          </div>
          <SelectTime handleCloseMenu={() => setIsDesktopMenuOpen(false)} />
          <SelectUnits handleCloseMenu={() => setIsDesktopMenuOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default MenuDesktop;
