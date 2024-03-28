import { CSSProperties, MouseEvent } from "react";

const styles: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 20,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};

type ModalBackdropPropsType = {
  setActiveModal: (value: string) => void;
};

function ModalBackdrop({ setActiveModal }: ModalBackdropPropsType) {
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        ...styles,
        height: `${document.documentElement.scrollHeight}px`,
      }}
    ></div>
  );
}

export default ModalBackdrop;
