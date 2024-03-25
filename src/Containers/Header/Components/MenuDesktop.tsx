import { MouseEvent, useContext, useEffect, useMemo } from "react";

import { ActiveModalContext } from "../../../contexts/activeModalContext";
import { UserLocationContext } from "../../../contexts/userLocationContext";
import { UserPrefersNoLocationContext } from "../../../contexts/userPrefersNoLocationContext";
import CloseIcon from "../../../svg/iconSvgs/Components/Close";
import { LinkButton } from "../../../BaseComponents";
import SelectTime from "./SelectTime";
import SelectUnits from "./SelectUnits";

type MenuDesktopPropsType = {
  setIsDesktopMenuOpen: (value: boolean) => void;
  isHomePage: boolean;
};

function MenuDesktop({
  setIsDesktopMenuOpen,
  isHomePage,
}: MenuDesktopPropsType) {
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);
  const { userLocation } = useContext(UserLocationContext);
  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

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

  const showSetLocationButton = useMemo(() => {
    if (userPrefersNoLocation) {
      return true;
    } else {
      if (!isHomePage && !userLocation) {
        return true;
      }
    }
    return false;
  }, [userLocation, userPrefersNoLocation, isHomePage]);

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

  /*
   *
   */
  const handleSetLocation = () => {
    setIsDesktopMenuOpen(false);
    if (!activeModal) {
      setActiveModal("setLocation");
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="absolute top-0 right-0 w-screen h-screen z-20 bg-black bg-opacity-30"
    >
      <div className="absolute top-0 right-0 w-72 pt-4 pr-6 pb-12 bg-white border-b border-l z-30">
        <div className="flex flex-col items-end gap-6">
          <div className="flex h-6 items-center">
            <button onClick={handleCloseClick}>
              <CloseIcon />
            </button>
          </div>
          <SelectTime handleCloseMenu={() => setIsDesktopMenuOpen(false)} />
          <SelectUnits handleCloseMenu={() => setIsDesktopMenuOpen(false)} />
          {showSetLocationButton && (
            <LinkButton handleClick={handleSetLocation} text="Set location" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuDesktop;
