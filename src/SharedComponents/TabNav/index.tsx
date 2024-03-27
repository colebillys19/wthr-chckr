import { useLocation } from "react-router-dom";

import NavButton from "./NavButton";

type TabNavPropsType = {
  location: string;
};

function TabNav({ location }: TabNavPropsType) {
  const { pathname } = useLocation();

  return (
    <nav className="inline-flex">
      <NavButton
        toPath={`/location/current?location=${location}`}
        text="Current"
        currentPath={pathname}
      />
      <NavButton
        toPath={`/location/hourly?location=${location}`}
        text="Hourly"
        currentPath={pathname}
      />
      <NavButton
        toPath={`/location/daily?location=${location}`}
        text="Daily"
        currentPath={pathname}
      />
    </nav>
  );
}

export default TabNav;
