import { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { UserPrefersNoLocationContext } from "../../contexts/userPrefersNoLocationContext";
import BurgerIcon from "../../svg/iconSvgs/Components/Burger";
import Nav from "./Components/Nav";
import SelectTime from "./Components/SelectTime";
import SelectUnits from "./Components/SelectUnits";
import UserLocationContainer from "./Components/UserLocationContainer";

function Header() {
  const { pathname } = useLocation();

  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <div className="bg-grey-b">
      <header className="flex justify-between items-center px-4 py-2">
        <Nav />
        <SelectTime />
        <SelectUnits />
        <BurgerIcon />
      </header>
      {!isHomePage && !userPrefersNoLocation && <UserLocationContainer />}
    </div>
  );
}

export default Header;
