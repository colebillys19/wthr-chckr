import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type InternalLinkPropsType = {
  href: string;
  handleClick?: () => void;
  children: ReactNode;
  isTextLink?: boolean;
};

function InternalLink({
  href,
  handleClick = () => null,
  children,
  isTextLink = true,
}: InternalLinkPropsType) {
  const handleClassName = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return "pointer-events-none";
    }
    return isTextLink ? "underline hover:no-underline" : "";
  };

  return (
    <NavLink to={href} onClick={handleClick} className={handleClassName}>
      {children}
    </NavLink>
  );
}

export default InternalLink;
