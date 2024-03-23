import { useContext, useEffect, useMemo, useState } from "react";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";

import { UserLocationContext } from "../../contexts/userLocationContext";
import BurgerIcon from "../../svg/iconSvgs/Components/Burger";
import GearIcon from "../../svg/iconSvgs/Components/Gear";
import Nav from "./Components/Nav";
import UserLocationBar from "./Components/UserLocationBar";
import MenuMobile from "./Components/MenuMobile";
import MenuDesktop from "./Components/MenuDesktop";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  const { userLocation } = useContext(UserLocationContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResizeMobile = throttle(() => {
      if (isMobileMenuOpen && window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    }, 200);
    window.addEventListener("resize", handleResizeMobile);
    return () => {
      window.removeEventListener("resize", handleResizeMobile);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResizeDesktop = throttle(() => {
      if (isDesktopMenuOpen && window.innerWidth < 768) {
        setIsDesktopMenuOpen(false);
      }
    }, 200);
    window.addEventListener("resize", handleResizeDesktop);
    return () => {
      window.removeEventListener("resize", handleResizeDesktop);
    };
  }, [isDesktopMenuOpen]);

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleGearClick = () => {
    setIsDesktopMenuOpen(true);
  };

  return (
    <div>
      {isMobileMenuOpen && (
        <MenuMobile
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          pathname={pathname}
        />
      )}
      {isDesktopMenuOpen && (
        <MenuDesktop setIsDesktopMenuOpen={setIsDesktopMenuOpen} />
      )}
      <header className="relative flex justify-between items-center px-6 py-4">
        <Nav />
        <div className="flex h-6 items-center">
          <button onClick={handleBurgerClick} className="md:hidden">
            <BurgerIcon />
          </button>
          <button onClick={handleGearClick} className="hidden md:inline">
            <GearIcon />
          </button>
        </div>
        {!isHomePage && (
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-b from-grey-b to-transparent"></div>
        )}
      </header>
      {!!userLocation && !isHomePage && (
        <UserLocationBar location={userLocation} />
      )}
    </div>
  );
}

export default Header;
