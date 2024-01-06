import { CSSProperties, ReactNode } from "react";

const tempStyles: CSSProperties = {
  alignItems: 'center',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '320px',
  minWidth: '680px',
  position: 'relative',
};

type ModalContainerProps = {
  children: ReactNode;
};

function ModalContainer({ children }: ModalContainerProps) {
  //

  return <div style={tempStyles}>{children}</div>;
}

export default ModalContainer;
