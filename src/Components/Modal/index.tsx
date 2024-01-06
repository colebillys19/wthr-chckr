import { useGlobalState } from "../../context";
import ModalDisplay from "./ModalDisplay";

function Modal() {
  const { activeModal } = useGlobalState();

  return !!activeModal ? <ModalDisplay activeModal={activeModal} /> : <div />;
}

export default Modal;
