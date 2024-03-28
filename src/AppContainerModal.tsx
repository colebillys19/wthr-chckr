import { MouseEvent, useContext, useMemo } from "react";

import { ActiveModalContext } from "./contexts/activeModalContext";
import AppContainerRouter from "./AppContainerRouter";
import SetLocationModal from "./SetLocationModal";

function AppContainerModal() {
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);

  const showSetLocationModal = useMemo(
    () => activeModal === "setLocation",
    [activeModal]
  );
  const showBackdrop = useMemo(() => !!activeModal, [activeModal]);

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  return (
    <div className="text-text tracking-wide bg-grey-b min-h-screen">
      <div className="relative mx-auto my-0 max-w-screen-lg min-h-screen bg-white">
        <AppContainerRouter />
      </div>
      {showSetLocationModal && (
        <SetLocationModal setActiveModal={setActiveModal} />
      )}
      {showBackdrop && (
        <div
          onClick={handleBackdropClick}
          className="absolute top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-30"
        ></div>
      )}
    </div>
  );
}

export default AppContainerModal;
