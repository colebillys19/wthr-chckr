import { MouseEvent } from "react";

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
      className="absolute top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-30"
    ></div>
  );
}

export default ModalBackdrop;
