import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";

const tempStyles = {
  columnGap: "10px",
  display: "flex",
};

function Nav() {
  const handleNavLinkClick = (event: MouseEvent) => {
    if (event.currentTarget.getAttribute("aria-current") === "page") {
      event.preventDefault();
    }
  };

  return (
    <nav>
      <ul style={tempStyles}>
        <li>
          <NavLink to="/" onClick={handleNavLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" onClick={handleNavLinkClick}>
            Location
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
