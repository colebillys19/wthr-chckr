import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type InternalLinkTextPropsType = {
  href: string;
  handleClick?: () => void;
  children: ReactNode;
};

function InternalLinkText({
  href,
  handleClick = () => null,
  children,
}: InternalLinkTextPropsType) {
  const handleClassName = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "pointer-events-none" : "underline hover:no-underline";
  };

  return (
    <NavLink to={href} onClick={handleClick} className={handleClassName}>
      {children}
    </NavLink>
  );
}

export default InternalLinkText;
