import { NavLink } from "react-router-dom";

import { getButtonStyles } from "./helpers";

type NavButtonPropsType = {
  toPath: string;
  text: string;
  currentPath: string;
};

function NavButton({ toPath, text, currentPath }: NavButtonPropsType) {
  const tailwindStyles = getButtonStyles(currentPath, text);
  const isPathMatch = toPath.slice(0, 15) === currentPath.slice(0, 15);

  return (
    <NavLink
      to={toPath}
      className={tailwindStyles}
      tabIndex={isPathMatch ? -1 : 0}
    >
      {text}
    </NavLink>
  );
}

export default NavButton;
