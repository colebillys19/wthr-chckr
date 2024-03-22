import { NavLink } from "react-router-dom";

import LogoPlaceholder from "../../../svg/logoPlaceholder/LogoPlaceholder";

function Nav() {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return "mr-6 pointer-events-none";
    }
    return "mr-6 underline";
  };

  return (
    <nav className="flex items-center">
      <NavLink to="/" className={navLinkClassName}>
        <LogoPlaceholder />
      </NavLink>
      <div className="hidden md:flex">
        <NavLink to="/cities" className={navLinkClassName}>
          Cities
        </NavLink>
        <NavLink to="/news" className={navLinkClassName}>
          News
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
