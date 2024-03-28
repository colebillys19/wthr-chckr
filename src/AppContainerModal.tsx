import { useContext, useMemo } from "react";

import { ActiveModalContext } from "./contexts/activeModalContext";
import AppContainerRouter from "./AppContainerRouter";
import SetLocationModal from "./SetLocationModal";
import ModalBackdrop from "./ModalBackdrop";

function AppContainerModal() {
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);

  const showSetLocationModal = useMemo(
    () => activeModal === "setLocation",
    [activeModal]
  );
  const showBackdrop = useMemo(() => !!activeModal, [activeModal]);

  return (
    <div className="text-text tracking-wide bg-grey-b min-h-screen">
      <div className="relative mx-auto my-0 max-w-screen-lg min-h-screen bg-white">
        <AppContainerRouter />
      </div>
      {showSetLocationModal && (
        <SetLocationModal setActiveModal={setActiveModal} />
      )}
      {showBackdrop && <ModalBackdrop setActiveModal={setActiveModal} />}
    </div>
  );
}

export default AppContainerModal;
