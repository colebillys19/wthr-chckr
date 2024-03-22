import { NavLink } from "react-router-dom";

import LogoPlaceholder from "../../../svg/logoPlaceholder/LogoPlaceholder";

function Nav() {
  //

  return (
    <nav className="flex items-center">
      <NavLink to="/" className="mr-6">
        <LogoPlaceholder />
      </NavLink>
      <div className="hidden md:flex">
        <NavLink to="/cities" className="mr-6">
          Cities
        </NavLink>
        <NavLink to="/news" className="mr-6">
          News
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
