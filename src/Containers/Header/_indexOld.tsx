// import { useContext, useMemo } from "react";
// import { useLocation } from "react-router-dom";

// import { UserPrefersNoLocationContext } from "../../contexts/userPrefersNoLocationContext";
import BurgerIcon from "../../svg/iconSvgs/Components/Burger";
import GearIcon from "../../svg/iconSvgs/Components/Gear";
import Nav from "./Components/Nav";
// import SelectTime from "./Components/SelectTime";
// import SelectUnits from "./Components/SelectUnits";
// import UserLocationContainer from "./Components/UserLocationContainer";

function Header() {
  // const { pathname } = useLocation();

  // const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  // const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleBurgerClick = () => null;

  const handleGearClick = () => null;

  return (
    <div className="bg-grey-b">
      <header className="flex justify-between items-center px-4 py-2">
        <Nav />
        {/* <SelectTime /> */}
        {/* <SelectUnits /> */}
        <button onClick={handleBurgerClick} className="lg:hidden">
          <BurgerIcon />
        </button>
        <button onClick={handleGearClick} className="hidden lg:inline">
          <GearIcon />
        </button>
      </header>
      {/* {!isHomePage && !userPrefersNoLocation && <UserLocationContainer />} */}
    </div>
  );
}

export default Header;
