import { useMemo } from "react";
import { NavLink } from "react-router-dom";

import CloseIcon from "../../../svg/iconSvgs/Components/Close";
import SelectTime from "./SelectTime";
import SelectUnits from "./SelectUnits";

type MenuMobilePropsType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  pathname: string;
};

function MenuMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  pathname,
}: MenuMobilePropsType) {
  const handleCloseClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (destination: string) => {
    if (destination !== pathname) {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "pointer-events-none" : "underline";

  const containerClassName = useMemo(() => {
    if (isMobileMenuOpen) {
      return "absolute top-0 left-0 w-screen h-48 px-6 py-4 bg-tertiary";
    }
    return "absolute -top-48 left-0 w-screen h-48 px-6 py-4 bg-tertiary";
  }, [isMobileMenuOpen]);

  return (
    <div className={containerClassName}>
      <div className="flex justify-end mb-6">
        <button onClick={handleCloseClick}>
          <CloseIcon />
        </button>
      </div>
      <div className="flex justify-between">
        <nav className="flex flex-col gap-6">
          <NavLink
            to="/cities"
            onClick={() => handleNavLinkClick("/cities")}
            className={navLinkClassName}
          >
            Cities
          </NavLink>
          <NavLink
            to="/news"
            onClick={() => handleNavLinkClick("/news")}
            className={navLinkClassName}
          >
            News
          </NavLink>
        </nav>
        <div className="flex flex-col items-end gap-6">
          <SelectTime />
          <SelectUnits />
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
