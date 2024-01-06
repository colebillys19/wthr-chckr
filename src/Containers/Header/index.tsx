import { useLocation } from "react-router-dom";

import { useGlobalState } from "../../context";
import Nav from "./Components/Nav";
import SelectUnits from "./Components/SelectUnits";
import UserLocationOff from "./Components/UserLocationOff";

const tempStyles = {
  backgroundColor: "#dddddd",
  display: "flex",
  justifyContent: "space-between",
};

function Header() {
  const { userPrefersNoLocation } = useGlobalState();
  const location = useLocation();

  return (
    <header style={tempStyles}>
      <Nav />
      {location.pathname === "/location" && userPrefersNoLocation && (
        <UserLocationOff />
      )}
      <SelectUnits />
    </header>
  );
}

export default Header;
