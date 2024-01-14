import { CSSProperties, ReactNode } from "react";

const tempStyles: CSSProperties = {
  margin: "20px",
  minHeight: "200px",
  outline: "3px solid purple",
  padding: "10px",
};

type HomeSectionContainerPropsType = {
  children: ReactNode;
};

function HomeSectionContainer({ children }: HomeSectionContainerPropsType) {
  //

  return <div style={tempStyles}>{children}</div>;
}

export default HomeSectionContainer;
