import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";

const tempStylesA = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#dddddd",
};

const tempStylesB = {
  display: "flex",
  columnGap: "10px",
};

function Header() {
  const handleNavLinkClick = (event: MouseEvent) => {
    if (event.currentTarget.getAttribute("aria-current") === "page") {
      event.preventDefault();
    }
  };

  const handleUnitClick = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <header style={tempStylesA}>
      <nav>
        <ul style={tempStylesB}>
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
      <div>
        <span>
          Units:&nbsp;
          <button onClick={handleUnitClick}>Imperial</button>
          &nbsp;|&nbsp;
          <button onClick={handleUnitClick}>Metric</button>
        </span>
      </div>
    </header>
  );
}

export default Header;
