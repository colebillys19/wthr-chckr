import { CSSProperties, MouseEvent, useEffect, useState } from "react";

const staticStyles: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 20,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "300ms",
};

type ModalBackdropPropsType = {
  setActiveModal: (value: string) => void;
};

function ModalBackdrop({ setActiveModal }: ModalBackdropPropsType) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        ...staticStyles,
        height: `${document.documentElement.scrollHeight}px`,
        opacity: hasMounted ? 1 : 0,
      }}
    ></div>
  );
}

export default ModalBackdrop;
