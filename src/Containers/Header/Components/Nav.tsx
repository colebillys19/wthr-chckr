import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";

import LogoPlaceholder from "../../../svg/logoPlaceholder/LogoPlaceholder";

function Nav() {
  const handleNavLinkClick = (event: MouseEvent) => {
    if (event.currentTarget.getAttribute("aria-current") === "page") {
      event.preventDefault();
    }
  };

  return (
    <nav className="flex items-center">
      <NavLink to="/" onClick={handleNavLinkClick} className="mr-3">
        <LogoPlaceholder />
      </NavLink>
      <NavLink to="/cities" onClick={handleNavLinkClick} className="mr-3">
        Cities
      </NavLink>
      <NavLink to="/news" onClick={handleNavLinkClick} className="mr-3">
        News
      </NavLink>
      <NavLink to="/test" onClick={handleNavLinkClick}>
        Test
      </NavLink>
    </nav>
  );
}

export default Nav;
