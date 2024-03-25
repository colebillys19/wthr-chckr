import { MouseEvent, useContext, useEffect, useMemo } from "react";

import { ActiveModalContext } from "../../../contexts/activeModalContext";
import { UserLocationContext } from "../../../contexts/userLocationContext";
import { UserPrefersNoLocationContext } from "../../../contexts/userPrefersNoLocationContext";
import CloseIcon from "../../../svg/iconSvgs/Components/Close";
import { LinkButton, InternalLinkText } from "../../../BaseComponents";
import SelectTime from "./SelectTime";
import SelectUnits from "./SelectUnits";

type MenuMobilePropsType = {
  setIsMobileMenuOpen: (value: boolean) => void;
  pathname: string;
  isHomePage: boolean;
};

function MenuMobile({
  setIsMobileMenuOpen,
  pathname,
  isHomePage,
}: MenuMobilePropsType) {
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);
  const { userLocation } = useContext(UserLocationContext);
  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
  };

  /*
   *
   */
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  /*
   *
   */
  const handleNavLinkClick = (destination: string) => {
    if (destination !== pathname) {
      setIsMobileMenuOpen(false);
    }
  };

  /*
   *
   */
  const handleSetLocation = () => {
    setIsMobileMenuOpen(false);
    if (!activeModal) {
      setActiveModal("setLocation");
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="absolute top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-30"
    >
      <div className="absolute top-0 left-0 w-screen px-6 pt-4 pb-12 bg-white border-b z-20">
        <div className="flex justify-end mb-6">
          <div className="flex h-6 items-center">
            <button onClick={handleCloseClick}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <nav className="flex flex-col gap-6">
            <InternalLinkText
              href="/cities"
              handleClick={() => handleNavLinkClick("/cities")}
            >
              Cities
            </InternalLinkText>
            <InternalLinkText
              href="/news"
              handleClick={() => handleNavLinkClick("/news")}
            >
              News
            </InternalLinkText>
          </nav>
          <div className="flex flex-col items-end gap-6">
            <SelectTime handleCloseMenu={() => setIsMobileMenuOpen(false)} />
            <SelectUnits handleCloseMenu={() => setIsMobileMenuOpen(false)} />
            {showSetLocationButton && (
              <LinkButton handleClick={handleSetLocation} text="Set location" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
