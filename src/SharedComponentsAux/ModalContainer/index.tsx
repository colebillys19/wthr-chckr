import { ReactNode } from "react";

type ModalContainerPropsType = {
  children: ReactNode;
};

function ModalContainer({ children }: ModalContainerPropsType) {
  //

  return <div>{children}</div>;
}

export default ModalContainer;
