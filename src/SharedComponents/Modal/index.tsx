import { useGlobalState } from "../../context";
import ModalDisplay from "./ModalDisplay";

function Modal() {
  const { activeModal } = useGlobalState();

  if (!!activeModal) {
    return <ModalDisplay />;
  }

  return <div></div>;
}

export default Modal;
