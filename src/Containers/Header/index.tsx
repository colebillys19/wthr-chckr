import { useContext, useEffect, useMemo } from "react";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import { UserLocationContext } from "../../contexts/userLocationContext";
import BurgerIcon from "../../svg/iconSvgs/Components/Burger";
import GearIcon from "../../svg/iconSvgs/Components/Gear";
import { ShadowDiv } from "../../SharedComponentsAux";
import Nav from "./Components/Nav";
import UserLocationBar from "./Components/UserLocationBar";
import MenuMobile from "./Components/MenuMobile";
import MenuDesktop from "./Components/MenuDesktop";

function Header() {
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);
  const { userLocation } = useContext(UserLocationContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResizeMobile = throttle(() => {
      if (activeModal === "headerMenuMobile" && window.innerWidth >= 768) {
        setActiveModal("headerMenuDesktop");
      }
      if (activeModal === "headerMenuDesktop" && window.innerWidth < 768) {
        setActiveModal("headerMenuMobile");
      }
    }, 200);
    window.addEventListener("resize", handleResizeMobile);
    return () => {
      window.removeEventListener("resize", handleResizeMobile);
    };
  }, [activeModal]);

  const isMobileMenuOpen = useMemo(
    () => activeModal === "headerMenuMobile",
    [activeModal]
  );
  const isDesktopMenuOpen = useMemo(
    () => activeModal === "headerMenuDesktop",
    [activeModal]
  );
  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleBurgerClick = () => {
    setActiveModal("headerMenuMobile");
  };

  const handleGearClick = () => {
    setActiveModal("headerMenuDesktop");
  };

  return (
    <div>
      {isMobileMenuOpen && (
        <MenuMobile pathname={pathname} isHomePage={isHomePage} />
      )}
      {isDesktopMenuOpen && <MenuDesktop isHomePage={isHomePage} />}
      <header className="relative flex justify-between items-center px-6 py-4">
        <Nav />
        <div className="flex h-6 items-center">
          <button onClick={handleBurgerClick} className="sm:hidden">
            <BurgerIcon />
          </button>
          <button onClick={handleGearClick} className="hidden sm:inline">
            <GearIcon />
          </button>
        </div>
        {!isHomePage && <ShadowDiv />}
      </header>
      {!!userLocation && !isHomePage && (
        <UserLocationBar userLocation={userLocation} />
      )}
    </div>
  );
}

export default Header;
