import { useContext } from 'react';
import { useLocation } from "react-router-dom";

import { UserPrefersNoLocationContext } from '../../contexts/userPrefersNoLocationContext';
import Nav from "./Components/Nav";
import SelectTime from "./Components/SelectTime";
import SelectUnits from "./Components/SelectUnits";
import UserLocationContainer from "./Components/UserLocationContainer";

function Header() {
  const routerLocation = useLocation();

  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  return (
    <div className='bg-grey-b'>
    <header>
      <Nav />
      <SelectTime />
      <SelectUnits />
    </header>
    {routerLocation.pathname !== "/" && !userPrefersNoLocation && <UserLocationContainer />}
    </div>
  );
}

export default Header;
