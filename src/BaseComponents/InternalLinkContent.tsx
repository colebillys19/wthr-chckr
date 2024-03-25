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
