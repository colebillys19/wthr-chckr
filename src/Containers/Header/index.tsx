import { CSSProperties } from "react";
// import { useLocation } from "react-router-dom";

// import { useGlobalState } from "../../context";
import Nav from "./Components/Nav";
import SelectTime from "./Components/SelectTime";
import SelectUnits from "./Components/SelectUnits";
// import UserLocation from "./Components/UserLocation";

const tempStyles: CSSProperties = {
  backgroundColor: "#dddddd",
  display: "flex",
  justifyContent: "space-between",
};

function Header() {
  // const location = useLocation();

  // const { userPrefersNoLocation } = useGlobalState();

  return (
    <header style={tempStyles}>
      <Nav />
      {/* {location.pathname === "/location" && !userPrefersNoLocation && <UserLocation />} */}
      <SelectTime />
      <SelectUnits />
    </header>
  );
}

export default Header;
