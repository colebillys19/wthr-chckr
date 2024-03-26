import { NavLink } from "react-router-dom";

import { getButtonStyles } from './helpers';

type NavButtonPropsType = {
  toPath: string;
  text: string;
  currentPath: string;
};

function NavButton({ toPath, text, currentPath }: NavButtonPropsType) {
  const tailwindStyles = getButtonStyles(currentPath, text);

  return (
    <NavLink
      to={toPath}
      className={tailwindStyles}
      tabIndex={toPath === currentPath ? -1 : 0}
    >
      {text}
    </NavLink>
  );
}

export default NavButton;
