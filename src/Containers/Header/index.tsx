import { CSSProperties, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useGlobalState } from "../../context";
import Nav from "./Components/Nav";
import SelectUnits from "./Components/SelectUnits";
import UserLocation from "./Components/UserLocation";

const tempStyles: CSSProperties = {
  backgroundColor: "#dddddd",
  display: "flex",
  justifyContent: "space-between",
};

function Header() {
  const { userPrefersNoLocation } = useGlobalState();

  const location = useLocation();

  const { setRecentLocations, setUserLocation } = useGlobalState();

  useEffect(() => {
    const storageUserLocation = localStorage.getItem("userLocation");

    if (storageUserLocation) {
      setUserLocation(storageUserLocation);
    }
  }, []);

  useEffect(() => {
    const storageRecentLocations = localStorage.getItem("recentLocations");

    if (storageRecentLocations) {
      setRecentLocations(JSON.parse(storageRecentLocations));
    }
  }, []);

  return (
    <header style={tempStyles}>
      <Nav />
      {location.pathname === "/location" && <UserLocation />}
      <SelectUnits />
    </header>
  );
}

export default Header;
