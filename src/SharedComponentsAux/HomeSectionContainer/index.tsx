import { ReactNode } from "react";

type HomeSectionContainerPropsType = {
  children: ReactNode;
};

function HomeSectionContainer({ children }: HomeSectionContainerPropsType) {
  //

  return <div>{children}</div>;
}

export default HomeSectionContainer;
