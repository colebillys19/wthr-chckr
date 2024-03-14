import { useContext } from "react";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import ModalDisplay from "./ModalDisplay";

function Modal() {
  const { activeModal } = useContext(ActiveModalContext);

  if (!!activeModal) {
    return <ModalDisplay />;
  }

  return <div></div>;
}

export default Modal;
