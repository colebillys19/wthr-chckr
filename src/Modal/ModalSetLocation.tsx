import { useContext } from "react";

import { ActiveModalContext } from "../contexts/activeModalContext";
import CloseIcon from "../svg/iconSvgs/Components/Close";
import SetLocationFlow from "../SharedComponents/SetLocationFlow";

function ModalSetLocation() {
  const { setActiveModal } = useContext(ActiveModalContext);

  const handleClose = () => {
    setActiveModal("");
  };

  return (
    <div className="bg-white border-b z-30 w-full max-w-screen-sm px-8 pt-6 pb-12">
      <div className="flex justify-end mb-6">
        <div className="flex h-6 items-center">
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <div>
        <SetLocationFlow isModal />
      </div>
    </div>
  );
}

export default ModalSetLocation;