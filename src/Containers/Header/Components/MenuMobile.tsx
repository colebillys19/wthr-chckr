import { MouseEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";

import CloseIcon from "../../../svg/iconSvgs/Components/Close";
import SelectTime from "./SelectTime";
import SelectUnits from "./SelectUnits";

type MenuMobilePropsType = {
  setIsMobileMenuOpen: (value: boolean) => void;
  pathname: string;
};

function MenuMobile({ setIsMobileMenuOpen, pathname }: MenuMobilePropsType) {
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
  const handlNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "pointer-events-none" : "underline";

  return (
    <div
      onClick={handleBackdropClick}
      className="absolute top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-30"
    >
      <div className="absolute top-0 left-0 w-screen h-48 px-6 py-4 bg-white border-b z-20">
        <div className="flex justify-end mb-6">
          <div className="flex h-6 items-center">
            <button onClick={handleCloseClick}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <nav className="flex flex-col gap-6">
            <NavLink
              to="/cities"
              onClick={() => handleNavLinkClick("/cities")}
              className={handlNavLinkClassName}
            >
              Cities
            </NavLink>
            <NavLink
              to="/news"
              onClick={() => handleNavLinkClick("/news")}
              className={handlNavLinkClassName}
            >
              News
            </NavLink>
          </nav>
          <div className="flex flex-col items-end gap-6">
            <SelectTime handleCloseMenu={() => setIsMobileMenuOpen(false)} />
            <SelectUnits handleCloseMenu={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
