import { useContext, useEffect, useMemo, useState } from "react";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";

import { UserLocationContext } from "../../contexts/userLocationContext";
import BurgerIcon from "../../svg/iconSvgs/Components/Burger";
import GearIcon from "../../svg/iconSvgs/Components/Gear";
import Nav from "./Components/Nav";
import UserLocationBar from "./Components/UserLocationBar";
import MenuMobile from "./Components/MenuMobile";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { userLocation } = useContext(UserLocationContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = throttle(() => {
      if (isMobileMenuOpen && window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    }, 200);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleGearClick = () => null;

  return (
    <div>
      {isMobileMenuOpen && (
        <MenuMobile
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          pathname={pathname}
        />
      )}
      <header className="flex justify-between items-center px-4 py-2">
        <Nav />
        <div className="flex">
          <button onClick={handleBurgerClick} className="md:hidden">
            <BurgerIcon />
          </button>
          <button onClick={handleGearClick} className="hidden md:inline">
            <GearIcon />
          </button>
        </div>
      </header>
      {!!userLocation && !isHomePage && (
        <UserLocationBar location={userLocation} />
      )}
    </div>
  );
}

export default Header;
