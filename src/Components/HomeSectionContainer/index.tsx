import { ReactNode } from "react";

const tempStyles = {
  minHeight: "200px",
  outline: "3px solid purple",
  margin: "20px",
  padding: "10px",
};

type HomeSectionContainerProps = {
  children: ReactNode;
};

function HomeSectionContainer({ children }: HomeSectionContainerProps) {
  //

  return <div style={tempStyles}>{children}</div>;
}

export default HomeSectionContainer;
