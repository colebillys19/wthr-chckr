import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type InternalLinkContentPropsType = {
  href: string;
  handleClick?: () => void;
  children: ReactNode;
};

function InternalLinkContent({
  href,
  handleClick = () => null,
  children,
}: InternalLinkContentPropsType) {
  const handleClassName = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return "relative pointer-events-none";
    }
    return "relative";
  };

  return (
    <NavLink to={href} onClick={handleClick} className={handleClassName}>
      {children}
    </NavLink>
  );
}

export default InternalLinkContent;

/*

import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

type InternalLinkContentPropsType = {
  href: string;
  handleClick?: () => void;
  isHoverable?: boolean;
  children: ReactNode;
};

function InternalLinkContent({
  href,
  handleClick = () => null,
  isHoverable = true,
  children,
}: InternalLinkContentPropsType) {
  const [showGreyBg, setShowGreyBg] = useState(false);

  const handleToggleGreyBg = () => {
    setShowGreyBg((prev) => !prev);
  };

  const handleClassName = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return "relative pointer-events-none";
    }
    return "relative";
  };

  return (
    <NavLink
      to={href}
      onClick={handleClick}
      onMouseOver={handleToggleGreyBg}
      onMouseOut={handleToggleGreyBg}
      className={handleClassName}
    >
      <span className="relative z-10">{children}</span>
      {isHoverable && showGreyBg && (
        <span className="absolute top-0 left-0 w-full h-full bg-grey-b opacity-20"></span>
      )}
    </NavLink>
  );
}

export default InternalLinkContent;


*/
