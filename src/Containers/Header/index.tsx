import { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { UserLocationContext } from "../../contexts/userLocationContext";
import BurgerIcon from "../../svg/iconSvgs/Components/Burger";
import GearIcon from "../../svg/iconSvgs/Components/Gear";
import Nav from "./Components/Nav";
import UserLocationBar from "./Components/UserLocationBar";

function Header() {
  const { userLocation } = useContext(UserLocationContext);
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleBurgerClick = () => null;

  const handleGearClick = () => null;

  return (
    <>
      <header className="flex justify-between items-center px-4 py-2">
        <Nav />
        <div>
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
    </>
  );
}

export default Header;
