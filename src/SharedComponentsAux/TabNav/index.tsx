import { NavLink } from "react-router-dom";

type TabNavPropsType = {
  location: string;
};

function TabNav({ location }: TabNavPropsType) {
  //

  return (
    <nav>
      <NavLink to={`/location/current?location=${location}`}>Current</NavLink>
      <span>&nbsp;</span>
      <NavLink to={`/location/hourly?location=${location}`}>Hourly</NavLink>
      <span>&nbsp;</span>
      <NavLink to={`/location/daily?location=${location}`}>Daily</NavLink>
    </nav>
  );
}

export default TabNav;
