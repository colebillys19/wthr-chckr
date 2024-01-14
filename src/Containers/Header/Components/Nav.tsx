import { CSSProperties, MouseEvent } from "react";
import { NavLink } from "react-router-dom";

const tempStyles: CSSProperties = {
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
      <NavLink to="/" onClick={handleNavLinkClick}>
        Home
      </NavLink>
    </nav>
  );
}

export default Nav;
